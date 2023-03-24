import axios from "axios"

const baseUrl = "https://aqueous-tor-51893.herokuapp.com/api"

const axiosInstance = axios.create({
  baseURL: baseUrl,
})

axiosInstance.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem("authToken")
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjQsIm5hbWUiOiJiZWNreSIsImVtYWlsIjoiYmVja3lAZ21haWwuY29tIiwiYWNjb3VudCI6ImJlY2t5MTIzIiwiYXZhdGFyIjpudWxsLCJjb3ZlclBhZ2UiOiJodHRwczovL2kuaW1ndXIuY29tL3dETFVVeUQucG5nIiwicm9sZSI6InVzZXIiLCJpbnRyb2R1Y3Rpb24iOm51bGwsImNyZWF0ZWRBdCI6IjIwMjMtMDMtMjRUMDc6Mjc6MzIuMDAwWiIsInVwZGF0ZWRBdCI6IjIwMjMtMDMtMjRUMDc6Mjc6MzIuMDAwWiIsImlhdCI6MTY3OTY0MjkzNiwiZXhwIjoxNjgyMjM0OTM2fQ.-NfrksbEyCxJlthIKjICI04pZ3wM6d_6YTIe09tlRgk"
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    console.error(error)
  }
)

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
