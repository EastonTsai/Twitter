    
    export const res = {
      data:[
    {
        "id": 54,
        "name": "Stephanie Heller",
        "email": "user5@example.com",
        "account": "user5",
        "avatar": "https://loremflickr.com/160/160/selfie/?random=46.78331361899271",
        "coverPage": "https://i.imgur.com/wDLUUyD.png",
        "introduction": "Rerum labore nam pariatur qui.",
        "createdAt": "2023-03-24T07:14:08.000Z",
        "updatedAt": "2023-03-24T07:14:08.000Z",
        "followerCounts": 40,
        "followingCounts": 50,
        "tweetCounts": 11,
        "likeCounts": 65
    },
    {
        "id": 14,
        "name": "Alma Feest",
        "email": "user1@example.com",
        "account": "user1",
        "avatar": "https://loremflickr.com/160/160/selfie/?random=30.655207829044695",
        "coverPage": "https://i.imgur.com/wDLUUyD.png",
        "introduction": "Quis est impedit alias.",
        "createdAt": "2023-03-24T07:14:08.000Z",
        "updatedAt": "2023-03-24T07:14:08.000Z",
        "followerCounts": 40,
        "followingCounts": 770,
        "tweetCounts": 10,
        "likeCounts": 80
    },
    {
        "id": 24,
        "name": "Willie Toy DDS",
        "email": "user2@example.com",
        "account": "user2",
        "avatar": "https://loremflickr.com/160/160/selfie/?random=73.40251908103086",
        "coverPage": "https://i.imgur.com/wDLUUyD.png",
        "introduction": "Reiciendis neque dignissimos atque.",
        "createdAt": "2023-03-24T07:14:08.000Z",
        "updatedAt": "2023-03-24T07:14:08.000Z",
        "followerCounts": 80,
        "followingCounts": 80,
        "tweetCounts": 10,
        "likeCounts": 40
    },
    {
        "id": 34,
        "name": "Darrell Hagenes",
        "email": "user3@example.com",
        "account": "user3",
        "avatar": "https://loremflickr.com/160/160/selfie/?random=69.11020842718986",
        "coverPage": "https://i.imgur.com/wDLUUyD.png",
        "introduction": "Doloremque corrupti laboriosam sint et aut impedit.",
        "createdAt": "2023-03-24T07:14:08.000Z",
        "updatedAt": "2023-03-24T07:14:08.000Z",
        "followerCounts": 50,
        "followingCounts": 60,
        "tweetCounts": 10,
        "likeCounts": 50
    },
    {
        "id": 44,
        "name": "Jody Stark",
        "email": "user4@example.com",
        "account": "user4",
        "avatar": "https://loremflickr.com/160/160/selfie/?random=5.8021071307837735",
        "coverPage": "https://i.imgur.com/wDLUUyD.png",
        "introduction": "Ullam expedita ab eveniet ad suscipit voluptatem amet nihil.",
        "createdAt": "2023-03-24T07:14:08.000Z",
        "updatedAt": "2023-03-24T07:14:08.000Z",
        "followerCounts": 0,
        "followingCounts": 0,
        "tweetCounts": 10,
        "likeCounts": 0
    },
    {
        "id": 4,
        "name": "root",
        "email": "root@example.com",
        "account": "root",
        "avatar": "https://loremflickr.com/160/160/selfie/?random=27.726823057090954",
        "coverPage": "https://i.imgur.com/wDLUUyD.png",
        "introduction": "Quaerat commodi hic nobis sit est voluptatem deserunt ducimus iusto.",
        "createdAt": "2023-03-24T07:14:08.000Z",
        "updatedAt": "2023-03-24T07:14:08.000Z",
        "followerCounts": 1,
        "followingCounts": 0,
        "tweetCounts": 0,
        "likeCounts": 0
    },
    {
        "id": 64,
        "name": "becky",
        "email": "becky@gmail.com",
        "account": "becky123",
        "avatar": null,
        "coverPage": "https://i.imgur.com/wDLUUyD.png",
        "introduction": null,
        "createdAt": "2023-03-24T07:27:32.000Z",
        "updatedAt": "2023-03-24T07:27:32.000Z",
        "followerCounts": 0,
        "followingCounts": 1,
        "tweetCounts": 0,
        "likeCounts": 0
    }
]
    }
    
    
    
    //是一個陣列 , 裡面有很多物件 , 物件裡才是各種資料
    export let dummy ={data:[
      {
        "role": "user or admin", // user || admin,
        "id": 1,
        "account":"user5",
        "password": "12345",
        "email":"user5@example.com",
        "name": "user5 name",							
        "avatar":"https://picsum.photos/500/400?random=2",
        "coverPage":"https://picsum.photos/500/400?random=1",
        "description":"推文內容, 推文內容,推文內容,推文內容,推文內容,推文內容,推文內容,推文內容,",
        "createdAt": "YYYY-MM-DDThh:mm:ss.000Z",
        "updatedAt": "YYYY-MM-DDThh:mm:ss.000Z",
        "followingCounts": 12,
        "followerCounts": 10,
        "likeCounts": 10,
        "replyCounts": 30,
        "introduction":"自我介紹", //自我介紹
        "checkPassword": "12345",
        "isFollowed": true, // 是否也被當前使用者追蹤
        "isCurrentUser": false,// 是否包含當前登入使用者 ; 目前登入者是否在前10名當中
        "userId": 10, // 當前使用者想要追蹤對象的 user id
      },
      {
        "role": "user or admin", // user || admin,
        "id": 2,
        "account":"user5",
        "password": "12345",
        "email":"user5@example.com",
        "name": "user5 name",							
        "avatar":"https://picsum.photos/500/400?random=2",
        "coverPage":"https://picsum.photos/500/400?random=1",
        "description":"推文內容, 推文內容,推文內容,推文內容,推文內容,推文內容,推文內容,推文內容,",
        "createdAt": "YYYY-MM-DDThh:mm:ss.000Z",
        "updatedAt": "YYYY-MM-DDThh:mm:ss.000Z",
        "followingCounts": 12,
        "followerCounts": 10,
        "likeCounts": 10,
        "replyCounts": 30,
        "introduction":"自我介紹", //自我介紹
        "checkPassword": "12345",
        "isFollowed": true, // 是否也被當前使用者追蹤
        "isCurrentUser": false,// 是否包含當前登入使用者 ; 目前登入者是否在前10名當中
        "userId": 10, // 當前使用者想要追蹤對象的 user id
      },
      {
        "role": "user or admin", // user || admin,
        "id": 3,
        "account":"user5",
        "password": "12345",
        "email":"user5@example.com",
        "name": "user5 name",							
        "avator":"https://picsum.photos/500/400?random=2",
        "coverPage":"https://picsum.photos/500/400?random=1",
        "description":"推文內容, 推文內容,推文內容,推文內容,推文內容,推文內容,推文內容,推文內容,",
        "createdAt": "YYYY-MM-DDThh:mm:ss.000Z",
        "updatedAt": "YYYY-MM-DDThh:mm:ss.000Z",
        "followingCounts": 12,
        "followerCounts": 10,
        "likeCounts": 10,
        "replyCounts": 30,
        "introduction":"自我介紹", //自我介紹
        "checkPassword": "12345",
        "isFollowed": true, // 是否也被當前使用者追蹤
        "isCurrentUser": false,// 是否包含當前登入使用者 ; 目前登入者是否在前10名當中
        "userId": 10, // 當前使用者想要追蹤對象的 user id
      },
      {
        "role": "user or admin", // user || admin,
        "id": 4,
        "account":"user5",
        "password": "12345",
        "email":"user5@example.com",
        "name": "user5 name",							
        "avator":"https://picsum.photos/500/400?random=2",
        "coverPage":"https://picsum.photos/500/400?random=1",
        "description":"推文內容, 推文內容,推文內容,推文內容,推文內容,推文內容,推文內容,推文內容,",
        "createdAt": "YYYY-MM-DDThh:mm:ss.000Z",
        "updatedAt": "YYYY-MM-DDThh:mm:ss.000Z",
        "followingCounts": 12,
        "followerCounts": 10,
        "likeCounts": 10,
        "replyCounts": 30,
        "introduction":"自我介紹", //自我介紹
        "checkPassword": "12345",
        "isFollowed": true, // 是否也被當前使用者追蹤
        "isCurrentUser": false,// 是否包含當前登入使用者 ; 目前登入者是否在前10名當中
        "userId": 10, // 當前使用者想要追蹤對象的 user id
      },
      {
        "role": "user or admin", // user || admin,
        "id": 5,
        "account":"user5",
        "password": "12345",
        "email":"user5@example.com",
        "name": "user5 name",							
        "avator":"https://picsum.photos/500/400?random=2",
        "coverPage":"https://picsum.photos/500/400?random=1",
        "description":"推文內容, 推文內容,推文內容,推文內容,推文內容,推文內容,推文內容,推文內容,",
        "createdAt": "YYYY-MM-DDThh:mm:ss.000Z",
        "updatedAt": "YYYY-MM-DDThh:mm:ss.000Z",
        "followingCounts": 12,
        "followerCounts": 10,
        "likeCounts": 10,
        "replyCounts": 30,
        "introduction":"自我介紹", //自我介紹
        "checkPassword": "12345",
        "isFollowed": true, // 是否也被當前使用者追蹤
        "isCurrentUser": false,// 是否包含當前登入使用者 ; 目前登入者是否在前10名當中
        "userId": 10, // 當前使用者想要追蹤對象的 user id
      },
      {
        "role": "user or admin", // user || admin,
        "id": 6,
        "account":"user5",
        "password": "12345",
        "email":"user5@example.com",
        "name": "user5 name",							
        "avator":"https://picsum.photos/500/400?random=2",
        "coverPage":"https://picsum.photos/500/400?random=1",
        "description":"推文內容, 推文內容,推文內容,推文內容,推文內容,推文內容,推文內容,推文內容,",
        "createdAt": "YYYY-MM-DDThh:mm:ss.000Z",
        "updatedAt": "YYYY-MM-DDThh:mm:ss.000Z",
        "followingCounts": 12,
        "followerCounts": 10,
        "likeCounts": 10,
        "replyCounts": 30,
        "introduction":"自我介紹", //自我介紹
        "checkPassword": "12345",
        "isFollowed": true, // 是否也被當前使用者追蹤
        "isCurrentUser": false,// 是否包含當前登入使用者 ; 目前登入者是否在前10名當中
        "userId": 10, // 當前使用者想要追蹤對象的 user id
      },
      {
        "role": "user or admin", // user || admin,
        "id": 7,
        "account":"user5",
        "password": "12345",
        "email":"user5@example.com",
        "name": "user5 name",							
        "avator":"https://picsum.photos/500/400?random=2",
        "coverPage":"https://picsum.photos/500/400?random=1",
        "description":"推文內容, 推文內容,推文內容,推文內容,推文內容,推文內容,推文內容,推文內容,",
        "createdAt": "YYYY-MM-DDThh:mm:ss.000Z",
        "updatedAt": "YYYY-MM-DDThh:mm:ss.000Z",
        "followingCounts": 12,
        "followerCounts": 10,
        "likeCounts": 10,
        "replyCounts": 30,
        "introduction":"自我介紹", //自我介紹
        "checkPassword": "12345",
        "isFollowed": true, // 是否也被當前使用者追蹤
        "isCurrentUser": false,// 是否包含當前登入使用者 ; 目前登入者是否在前10名當中
        "userId": 10, // 當前使用者想要追蹤對象的 user id
      },
      {
        "role": "user or admin", // user || admin,
        "id": 8,
        "account":"user5",
        "password": "12345",
        "email":"user5@example.com",
        "name": "user5 name",							
        "avator":"https://picsum.photos/500/400?random=2",
        "coverPage":"https://picsum.photos/500/400?random=1",
        "description":"推文內容, 推文內容,推文內容,推文內容,推文內容,推文內容,推文內容,推文內容,",
        "createdAt": "YYYY-MM-DDThh:mm:ss.000Z",
        "updatedAt": "YYYY-MM-DDThh:mm:ss.000Z",
        "followingCounts": 12,
        "followerCounts": 10,
        "likeCounts": 10,
        "replyCounts": 30,
        "introduction":"自我介紹", //自我介紹
        "checkPassword": "12345",
        "isFollowed": true, // 是否也被當前使用者追蹤
        "isCurrentUser": false,// 是否包含當前登入使用者 ; 目前登入者是否在前10名當中
        "userId": 10, // 當前使用者想要追蹤對象的 user id
      },
      {
        "role": "user or admin", // user || admin,
        "id": 9,
        "account":"user5",
        "password": "12345",
        "email":"user5@example.com",
        "name": "user5 name",							
        "avator":"https://picsum.photos/500/400?random=2",
        "coverPage":"https://picsum.photos/500/400?random=1",
        "description":"推文內容, 推文內容,推文內容,推文內容,推文內容,推文內容,推文內容,推文內容,",
        "createdAt": "YYYY-MM-DDThh:mm:ss.000Z",
        "updatedAt": "YYYY-MM-DDThh:mm:ss.000Z",
        "followingCounts": 12,
        "followerCounts": 10,
        "likeCounts": 10,
        "replyCounts": 30,
        "introduction":"自我介紹", //自我介紹
        "checkPassword": "12345",
        "isFollowed": true, // 是否也被當前使用者追蹤
        "isCurrentUser": false,// 是否包含當前登入使用者 ; 目前登入者是否在前10名當中
        "userId": 10, // 當前使用者想要追蹤對象的 user id
      },
      {
        "role": "user or admin", // user || admin,
        "id": 10,
        "account":"user5",
        "password": "12345",
        "email":"user5@example.com",
        "name": "user5 name",							
        "avator":"https://picsum.photos/500/400?random=2",
        "coverPage":"https://picsum.photos/500/400?random=1",
        "description":"推文內容, 推文內容,推文內容,推文內容,推文內容,推文內容,推文內容,推文內容,",
        "createdAt": "YYYY-MM-DDThh:mm:ss.000Z",
        "updatedAt": "YYYY-MM-DDThh:mm:ss.000Z",
        "followingCounts": 12,
        "followerCounts": 10,
        "likeCounts": 10,
        "replyCounts": 30,
        "introduction":"自我介紹", //自我介紹
        "checkPassword": "12345",
        "isFollowed": true, // 是否也被當前使用者追蹤
        "isCurrentUser": false,// 是否包含當前登入使用者 ; 目前登入者是否在前10名當中
        "userId": 10, // 當前使用者想要追蹤對象的 user id
      },
      {
        "role": "user or admin", // user || admin,
        "id": 11,
        "account":"user5",
        "password": "12345",
        "email":"user5@example.com",
        "name": "user5 name",							
        "avator":"https://picsum.photos/500/400?random=2",
        "coverPage":"https://picsum.photos/500/400?random=1",
        "description":"推文內容, 推文內容,推文內容,推文內容,推文內容,推文內容,推文內容,推文內容,",
        "createdAt": "YYYY-MM-DDThh:mm:ss.000Z",
        "updatedAt": "YYYY-MM-DDThh:mm:ss.000Z",
        "followingCounts": 12,
        "followerCounts": 10,
        "likeCounts": 10,
        "replyCounts": 30,
        "introduction":"自我介紹", //自我介紹
        "checkPassword": "12345",
        "isFollowed": true, // 是否也被當前使用者追蹤
        "isCurrentUser": false,// 是否包含當前登入使用者 ; 目前登入者是否在前10名當中
        "userId": 10, // 當前使用者想要追蹤對象的 user id
      },
    ]}
//全站所有資料 , 層級較多
    export let allDummy = {
      'status': 'success',
      'message': '各種錯誤訊息',
      'data': [ //data 是 -陣列- , 裡面有很多份 -物件- , 物件裡很多 -資料-
        {
        'token': 'token',
        'user':{
          "role": "user or admin", // user || admin,
          "id": 5,
          "account":"user5",
          "password": "12345",
          "email":"user5@example.com",
          "name": "user5 name",							
          "avator":"https://picsum.photos/500/400?random=2",
          "coverPage":"https://picsum.photos/500/400?random=1",
          "description":"推文內容, 推文內容,推文內容,推文內容,推文內容,推文內容,推文內容,推文內容,",
          "createdAt": "YYYY-MM-DDThh:mm:ss.000Z",
          "updatedAt": "YYYY-MM-DDThh:mm:ss.000Z",
          "followingCounts": 12,
          "followerCounts": 10,
          "likeCounts": 10,
          "replyCounts": 30,
          "introduction":"自我介紹", //自我介紹
          "checkPassword": "12345",
          "isFollowed": true, // 是否也被當前使用者追蹤
          "isCurrentUser": false,// 是否包含當前登入使用者 ; 目前登入者是否在前10名當中
          "userId": 10, // 當前使用者想要追蹤對象的 user id
        },
      }
    ]
    }
    export let dummy2 ={data:[
      {
        "role": "user or admin", // user || admin,
        "id": 1,
        "account":"user8",
        "password": "54321",
        "email":"user5@example.com",
        "name": "user5 name",							
        "avator":"https://picsum.photos/500/400?random=4",
        "coverPage":"https://picsum.photos/500/400?random=5",
        "description":"kej fke ktjkwel akjw lk tlak tjlwk ejal kejlt kawj eljtlw kejltakw ejltk awjel ",
        "createdAt": "YYYY-MM-DDThh:mm:ss.000Z",
        "updatedAt": "YYYY-MM-DDThh:mm:ss.000Z",
        "followingCounts": 12,
        "followerCounts": 10,
        "likeCounts": 10,
        "replyCounts": 30,
        "introduction":"自我介紹", //自我介紹
        "checkPassword": "12345",
        "isFollowed": true, // 是否也被當前使用者追蹤
        "isCurrentUser": false,// 是否包含當前登入使用者 ; 目前登入者是否在前10名當中
        "userId": 10, // 當前使用者想要追蹤對象的 user id
      },
      {
        "role": "user or admin", // user || admin,
        "id": 2,
        "account":"user8",
        "password": "54321",
        "email":"user5@example.com",
        "name": "user5 name",							
        "avator":"https://picsum.photos/500/400?random=4",
        "coverPage":"https://picsum.photos/500/400?random=5",
        "description":"kej fke ktjkwel akjw lk tlak tjlwk ejal kejlt kawj eljtlw kejltakw ejltk awjel ",
        "createdAt": "YYYY-MM-DDThh:mm:ss.000Z",
        "updatedAt": "YYYY-MM-DDThh:mm:ss.000Z",
        "followingCounts": 12,
        "followerCounts": 10,
        "likeCounts": 10,
        "replyCounts": 30,
        "introduction":"自我介紹", //自我介紹
        "checkPassword": "12345",
        "isFollowed": true, // 是否也被當前使用者追蹤
        "isCurrentUser": false,// 是否包含當前登入使用者 ; 目前登入者是否在前10名當中
        "userId": 10, // 當前使用者想要追蹤對象的 user id
      },
      {
        "role": "user or admin", // user || admin,
        "id": 3,
        "account":"user8",
        "password": "54321",
        "email":"user5@example.com",
        "name": "user5 name",							
        "avator":"https://picsum.photos/500/400?random=4",
        "coverPage":"https://picsum.photos/500/400?random=5",
        "description":"kej fke ktjkwel akjw lk tlak tjlwk ejal kejlt kawj eljtlw kejltakw ejltk awjel ",
        "createdAt": "YYYY-MM-DDThh:mm:ss.000Z",
        "updatedAt": "YYYY-MM-DDThh:mm:ss.000Z",
        "followingCounts": 12,
        "followerCounts": 10,
        "likeCounts": 10,
        "replyCounts": 30,
        "introduction":"自我介紹", //自我介紹
        "checkPassword": "12345",
        "isFollowed": true, // 是否也被當前使用者追蹤
        "isCurrentUser": false,// 是否包含當前登入使用者 ; 目前登入者是否在前10名當中
        "userId": 10, // 當前使用者想要追蹤對象的 user id
      },
      {
        "role": "user or admin", // user || admin,
        "id": 4,
        "account":"user8",
        "password": "54321",
        "email":"user5@example.com",
        "name": "user5 name",							
        "avator":"https://picsum.photos/500/400?random=4",
        "coverPage":"https://picsum.photos/500/400?random=5",
        "description":"kej fke ktjkwel akjw lk tlak tjlwk ejal kejlt kawj eljtlw kejltakw ejltk awjel ",
        "createdAt": "YYYY-MM-DDThh:mm:ss.000Z",
        "updatedAt": "YYYY-MM-DDThh:mm:ss.000Z",
        "followingCounts": 12,
        "followerCounts": 10,
        "likeCounts": 10,
        "replyCounts": 30,
        "introduction":"自我介紹", //自我介紹
        "checkPassword": "12345",
        "isFollowed": true, // 是否也被當前使用者追蹤
        "isCurrentUser": false,// 是否包含當前登入使用者 ; 目前登入者是否在前10名當中
        "userId": 10, // 當前使用者想要追蹤對象的 user id
      },
      {
        "role": "user or admin", // user || admin,
        "id": 5,
        "account":"user8",
        "password": "54321",
        "email":"user5@example.com",
        "name": "user5 name",							
        "avator":"https://picsum.photos/500/400?random=4",
        "coverPage":"https://picsum.photos/500/400?random=5",
        "description":"kej fke ktjkwel akjw lk tlak tjlwk ejal kejlt kawj eljtlw kejltakw ejltk awjel ",
        "createdAt": "YYYY-MM-DDThh:mm:ss.000Z",
        "updatedAt": "YYYY-MM-DDThh:mm:ss.000Z",
        "followingCounts": 12,
        "followerCounts": 10,
        "likeCounts": 10,
        "replyCounts": 30,
        "introduction":"自我介紹", //自我介紹
        "checkPassword": "12345",
        "isFollowed": true, // 是否也被當前使用者追蹤
        "isCurrentUser": false,// 是否包含當前登入使用者 ; 目前登入者是否在前10名當中
        "userId": 10, // 當前使用者想要追蹤對象的 user id
      },
      {
        "role": "user or admin", // user || admin,
        "id": 6,
        "account":"user8",
        "password": "54321",
        "email":"user5@example.com",
        "name": "user5 name",							
        "avator":"https://picsum.photos/500/400?random=4",
        "coverPage":"https://picsum.photos/500/400?random=5",
        "description":"kej fke ktjkwel akjw lk tlak tjlwk ejal kejlt kawj eljtlw kejltakw ejltk awjel ",
        "createdAt": "YYYY-MM-DDThh:mm:ss.000Z",
        "updatedAt": "YYYY-MM-DDThh:mm:ss.000Z",
        "followingCounts": 12,
        "followerCounts": 10,
        "likeCounts": 10,
        "replyCounts": 30,
        "introduction":"自我介紹", //自我介紹
        "checkPassword": "12345",
        "isFollowed": true, // 是否也被當前使用者追蹤
        "isCurrentUser": false,// 是否包含當前登入使用者 ; 目前登入者是否在前10名當中
        "userId": 10, // 當前使用者想要追蹤對象的 user id
      },
      {
        "role": "user or admin", // user || admin,
        "id": 7,
        "account":"user8",
        "password": "54321",
        "email":"user5@example.com",
        "name": "user5 name",							
        "avator":"https://picsum.photos/500/400?random=4",
        "coverPage":"https://picsum.photos/500/400?random=5",
        "description":"kej fke ktjkwel akjw lk tlak tjlwk ejal kejlt kawj eljtlw kejltakw ejltk awjel ",
        "createdAt": "YYYY-MM-DDThh:mm:ss.000Z",
        "updatedAt": "YYYY-MM-DDThh:mm:ss.000Z",
        "followingCounts": 12,
        "followerCounts": 10,
        "likeCounts": 10,
        "replyCounts": 30,
        "introduction":"自我介紹", //自我介紹
        "checkPassword": "12345",
        "isFollowed": true, // 是否也被當前使用者追蹤
        "isCurrentUser": false,// 是否包含當前登入使用者 ; 目前登入者是否在前10名當中
        "userId": 10, // 當前使用者想要追蹤對象的 user id
      },
      {
        "role": "user or admin", // user || admin,
        "id": 8,
        "account":"user8",
        "password": "54321",
        "email":"user5@example.com",
        "name": "user5 name",							
        "avator":"https://picsum.photos/500/400?random=4",
        "coverPage":"https://picsum.photos/500/400?random=5",
        "description":"kej fke ktjkwel akjw lk tlak tjlwk ejal kejlt kawj eljtlw kejltakw ejltk awjel ",
        "createdAt": "YYYY-MM-DDThh:mm:ss.000Z",
        "updatedAt": "YYYY-MM-DDThh:mm:ss.000Z",
        "followingCounts": 12,
        "followerCounts": 10,
        "likeCounts": 10,
        "replyCounts": 30,
        "introduction":"自我介紹", //自我介紹
        "checkPassword": "12345",
        "isFollowed": true, // 是否也被當前使用者追蹤
        "isCurrentUser": false,// 是否包含當前登入使用者 ; 目前登入者是否在前10名當中
        "userId": 10, // 當前使用者想要追蹤對象的 user id
      },
      {
        "role": "user or admin", // user || admin,
        "id": 9,
        "account":"user8",
        "password": "54321",
        "email":"user5@example.com",
        "name": "user5 name",							
        "avator":"https://picsum.photos/500/400?random=4",
        "coverPage":"https://picsum.photos/500/400?random=5",
        "description":"kej fke ktjkwel akjw lk tlak tjlwk ejal kejlt kawj eljtlw kejltakw ejltk awjel ",
        "createdAt": "YYYY-MM-DDThh:mm:ss.000Z",
        "updatedAt": "YYYY-MM-DDThh:mm:ss.000Z",
        "followingCounts": 12,
        "followerCounts": 10,
        "likeCounts": 10,
        "replyCounts": 30,
        "introduction":"自我介紹", //自我介紹
        "checkPassword": "12345",
        "isFollowed": true, // 是否也被當前使用者追蹤
        "isCurrentUser": false,// 是否包含當前登入使用者 ; 目前登入者是否在前10名當中
        "userId": 10, // 當前使用者想要追蹤對象的 user id
      },
      {
        "role": "user or admin", // user || admin,
        "id": 10,
        "account":"user8",
        "password": "54321",
        "email":"user5@example.com",
        "name": "user5 name",							
        "avator":"https://picsum.photos/500/400?random=4",
        "coverPage":"https://picsum.photos/500/400?random=5",
        "description":"kej fke ktjkwel akjw lk tlak tjlwk ejal kejlt kawj eljtlw kejltakw ejltk awjel ",
        "createdAt": "YYYY-MM-DDThh:mm:ss.000Z",
        "updatedAt": "YYYY-MM-DDThh:mm:ss.000Z",
        "followingCounts": 12,
        "followerCounts": 10,
        "likeCounts": 10,
        "replyCounts": 30,
        "introduction":"自我介紹", //自我介紹
        "checkPassword": "12345",
        "isFollowed": true, // 是否也被當前使用者追蹤
        "isCurrentUser": false,// 是否包含當前登入使用者 ; 目前登入者是否在前10名當中
        "userId": 10, // 當前使用者想要追蹤對象的 user id
      },
      {
        "role": "user or admin", // user || admin,
        "id": 11,
        "account":"user8",
        "password": "54321",
        "email":"user5@example.com",
        "name": "user5 name",							
        "avator":"https://picsum.photos/500/400?random=4",
        "coverPage":"https://picsum.photos/500/400?random=5",
        "description":"kej fke ktjkwel akjw lk tlak tjlwk ejal kejlt kawj eljtlw kejltakw ejltk awjel ",
        "createdAt": "YYYY-MM-DDThh:mm:ss.000Z",
        "updatedAt": "YYYY-MM-DDThh:mm:ss.000Z",
        "followingCounts": 12,
        "followerCounts": 10,
        "likeCounts": 10,
        "replyCounts": 30,
        "introduction":"自我介紹", //自我介紹
        "checkPassword": "12345",
        "isFollowed": true, // 是否也被當前使用者追蹤
        "isCurrentUser": false,// 是否包含當前登入使用者 ; 目前登入者是否在前10名當中
        "userId": 10, // 當前使用者想要追蹤對象的 user id
      },
      {
        "role": "user or admin", // user || admin,
        "id": 12,
        "account":"user8",
        "password": "54321",
        "email":"user5@example.com",
        "name": "user5 name",							
        "avator":"https://picsum.photos/500/400?random=4",
        "coverPage":"https://picsum.photos/500/400?random=5",
        "description":"kej fke ktjkwel akjw lk tlak tjlwk ejal kejlt kawj eljtlw kejltakw ejltk awjel ",
        "createdAt": "YYYY-MM-DDThh:mm:ss.000Z",
        "updatedAt": "YYYY-MM-DDThh:mm:ss.000Z",
        "followingCounts": 12,
        "followerCounts": 10,
        "likeCounts": 10,
        "replyCounts": 30,
        "introduction":"自我介紹", //自我介紹
        "checkPassword": "12345",
        "isFollowed": true, // 是否也被當前使用者追蹤
        "isCurrentUser": false,// 是否包含當前登入使用者 ; 目前登入者是否在前10名當中
        "userId": 10, // 當前使用者想要追蹤對象的 user id
      },
    ]}