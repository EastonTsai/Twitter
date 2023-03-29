import axios from "axios"

const baseUrl = "https://aqueous-tor-51893.herokuapp.com/api"

//使用 axios.interceptors 的方法夾帶 token 送出請求
const axiosInstance = axios.create({ baseURL: baseUrl })
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken")
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    console.error("驗證失敗", error.response.data)
  }
)
//後台使用的夾帶 token 發送請求
const axiosInstanceForAdmin = axios.create({ baseURL: baseUrl })
axiosInstanceForAdmin.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("adminAuthToken")
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    console.error("驗證失敗", error.response.data)
  }
)

//login 的發送
export const loginApi = async (account, password) => {
  try {
    const res = await axios.post(`${baseUrl}/users/login`, {
      account,
      password,
    })
    return res.data
  } catch (error) {
    if (error.response.data) {
      return error.response.data
    }
    return error
  }
}
//後台登入
export const adminApi = async (account, password) => {
  try {
    const res = await axios.post(`${baseUrl}/admin/login`, {
      account,
      password,
    })
    return res.data
  } catch (error) {
    console.log(error.response.data.message)
    return error.response.data
  }
}
//註冊
export const registerApi = async (
  account,
  name,
  email,
  password,
  checkPassword
) => {
  try {
    const res = await axios.post(`${baseUrl}/users`, {
      account,
      name,
      email,
      password,
      checkPassword,
    })
    return res.data
  } catch (error) {
    console.log(error.response.data.message)
    return error.response.data
  }
}
//編輯帳號

export const patchSetting = async (id, payload) => {
  try {
    const res = await axiosInstance.put(
      `${baseUrl}/users/${id}/setting`,
      payload
    )
    return res.data
  } catch (error) {
    //error 的 data 是在 error.response.data
    console.log(error.response.data.message)
    return error.response.data
  }
}
//後台取推文清單 / 預計回傳 陣列
export const getAdminTweets = async () => {
  try {
    const res = await axiosInstanceForAdmin.get(`${baseUrl}/admin/tweets`)
    return res.data
  } catch (error) {
    // console.log('err',error)
    // console.log('err.res',error.response)
    // console.log('err.res.data',error.response.data)

    return error.response.data
  }
}
//後台取使用者清單 / 預計回傳 陣列
export const getAdminUsersApi = async () => {
  try {
    const data = await axiosInstanceForAdmin.get(`${baseUrl}/admin/users`)
    return data
  } catch (error) {
    return "請求失敗"
  }
}
//後台刪除推文清單
export const deleteTweetApi = async (id) => {
  try {
    const res = await axiosInstanceForAdmin.delete(
      `${baseUrl}/admin/tweets/${id}`
    )
    return res
  } catch (error) {
    console.error("發送失敗", error)
  }
}
//取得某個使用者的所有追隨者
export const getUserFollowersApi = async (id) => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/users/${id}/followers`)
    return res.data //回傳陣列
  } catch (error) {
    console.error("傳送失敗", error)
  }
}
//取得某個使用者的所有追蹤對象
export const getUserFollowingsApi = async (id) => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/users/${id}/followings`)
    return res.data //回傳陣列
  } catch (error) {
    console.error("傳送失敗", error)
  }
}
//新增推文
export const addTweet = async (text) => {
  try {
    const res = await axiosInstance.post(`${baseUrl}/tweets`, {
      description: text,
    })
    console.log("回傳的是: ", res)
    const data = res.data
    if (data.status === "error") {
      return "error"
    }
    return data
  } catch (error) {
    console.error("Post 失敗", error)
  }
}
//取得所有推文
export const getAllTweets = async () => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/tweets`)
    return res.data
  } catch (error) {
    console.error("Get 失敗", error)
  }
}

// 取得某使用者資訊
export const getUserProfile = async (id) => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/users/${id}`)
    return res.data
  } catch (error) {
    console.error("[Get user's profile failed]: ", error)
  }
}

// 取得指定使用者所有貼文
export const getUserTweets = async (id) => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/users/${id}/tweets`)
    return res.data
  } catch (error) {
    console.error("[Get user's tweets failed]: ", error)
  }
}

// 取得指定使用者所有回覆
export const getUserReplies = async (id) => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/users/${id}/replied_tweets`)
    return res.data
  } catch (error) {
    console.error("[Get user's replies failed]: ", error)
  }
}

// 取得指定使用者所有喜歡的內容
export const getUserLikes = async (id) => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/users/${id}/likes`)
    return res.data
  } catch (error) {
    console.error("[Get user's likes failed]: ", error)
  }
}

// 取得指定貼文
export const getTweet = async (id) => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/tweets/${id}`)
    return res.data
  } catch (error) {
    console.error("[Get tweet failed]: ", error)
  }
}

// 取得指定貼文的所有留言
export const getTweetReply = async (id) => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/tweets/${id}/replies`)
    return res.data
  } catch (error) {
    console.error("[Get tweet's reply failed]: ", error)
  }
}

// 取得前十名跟隨使用者
export const getTopUsers = async () => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/top_followed_users`)
    return res.data
  } catch (error) {
    console.error("[Get top ten users failed]: ", error)
  }
}

// 追蹤特定使用者
export const followUser = async (id) => {
  try {
    const res = await axiosInstance.post(`${baseUrl}/followships`, {
      id: id,
    })
    return res
  } catch (error) {
    console.error("[Post follow user failed]: ", error)
  }
}

// 取消追蹤特定使用者
export const unFollowUser = async (id) => {
  try {
    const res = await axiosInstance.delete(`${baseUrl}/followships/${id}`)
    return res
  } catch (error) {
    console.error("[Delete follow user failed]: ", error)
  }
}

// 對指定推文回覆
export const postReplyMessage = async (payload) => {
  const { id, comment } = payload
  try {
    const res = await axiosInstance.post(`${baseUrl}/tweets/${id}/replies`, {
      comment: comment,
    })
    return res.data
  } catch (error) {
    console.error("[Post reply message failed]: ", error)
  }
}

// 對指定貼文按讚(like)
export const postLike = async (id) => {
  try {
    const res = await axiosInstance.post(`${baseUrl}/tweets/${id}/like`)
    return res.data
  } catch (error) {
    console.error("[Post like failed]: ", error)
  }
}

// 對指定貼文取消按讚(unlike)
export const postUnLike = async (id) => {
  try {
    const res = await axiosInstance.post(`${baseUrl}/tweets/${id}/unlike`)
    return res.data
  } catch (error) {
    console.error("[Post unlike failed]: ", error)
  }
}

// 編輯個人資料
export const putUserProfile = async (payload) => {
  const formData = payload.formData
  const id = formData.get("id")

  try {
    const res = await axiosInstance.put(`${baseUrl}/users/${id}`, formData)
    return res.data
  } catch (error) {
    console.error("[Put user profile failed]: ", error)
  }
}
