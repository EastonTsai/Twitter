import axios from "axios"

const baseUrl = "https://aqueous-tor-51893.herokuapp.com/api"

const axiosInstance = axios.create({
  baseURL: baseUrl,
})

axiosInstance.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem("authToken")
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjQsIm5hbWUiOiJjaGFuZ2UiLCJlbWFpbCI6ImNoYW5nZUBleGFtcGxlLmNvbSIsImFjY291bnQiOiJjaGFuZ2UiLCJhdmF0YXIiOm51bGwsImNvdmVyUGFnZSI6Imh0dHBzOi8vaS5pbWd1ci5jb20vd0RMVVV5RC5wbmciLCJyb2xlIjoidXNlciIsImludHJvZHVjdGlvbiI6bnVsbCwiY3JlYXRlZEF0IjoiMjAyMy0wMy0yMlQxNDo1Mjo1Mi4wMDBaIiwidXBkYXRlZEF0IjoiMjAyMy0wMy0yM1QwNzowMTozMC4wMDBaIiwiaWF0IjoxNjc5NjIwODA3LCJleHAiOjE2ODIyMTI4MDd9.hRo35omig54Vqfan5kd35wwpRaVya9M1zP72UbS4lk0"
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
export const followUser = async ({ id }) => {
  try {
    const res = await axiosInstance.post(`${baseUrl}/followships`, {
      id: { id },
    })
    return res
  } catch (error) {
    console.error("[Post follow user failed]: ", error)
  }
}
