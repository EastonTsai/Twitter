import axios from "axios"

const baseUrl = "https://aqueous-tor-51893.herokuapp.com/api"

const axiosInstance = axios.create({
  baseURL: baseUrl,
})

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken")
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    console.error(error)
  }
)

// 取得某使用者資訊
export const getUserProfile = async (id) => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/users/${id}`)
    return res.data
  } catch (error) {
    console.error("[Get user's profile failed]: ", error)
  }
}

// 取得所有貼文
export const getAllTweets = async () => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/tweets`)
    return res.data
  } catch (error) {
    console.error("[Get all tweets failed]: ", error)
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
    await axiosInstance.delete(`${baseUrl}/followships/${id}`)
  } catch (error) {
    console.error("[Delete follow user failed]: ", error)
  }
}
