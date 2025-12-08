const reels = [
  {
    username: "rishabh.codes",
    likeCount: 1280,
    isLiked: false,
    commentCount: 45,
    caption: "Late night coding vibes.",
    video: "./reels/video1.mp4",
    userProfile: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 12,
    isFollowed: false
  },
  {
    username: "designwithme",
    likeCount: 6420,
    isLiked: true,
    commentCount: 320,
    caption: "Minimal UI design tips.",
    video: "./reels/video2.mp4",
    userProfile: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 88,
    isFollowed: true
  },
  {
    username: "travelshots",
    likeCount: 9100,
    isLiked: false,
    commentCount: 540,
    caption: "Exploring the mountains today!",
    video: "./reels/video3.mp4",
    userProfile: "https://images.unsplash.com/photo-1541980162-745179a89211?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 304,
    isFollowed: true
  },
  {
    username: "foodiefun",
    likeCount: 2840,
    isLiked: true,
    commentCount: 190,
    caption: "Street food hits different!",
    video: "./reels/video4.mp4",
    userProfile: "https://images.unsplash.com/photo-1582335231349-7dc26866d9a7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 76,
    isFollowed: false
  },
  {
    username: "fitlife",
    likeCount: 7300,
    isLiked: false,
    commentCount: 260,
    caption: "Morning workout routine.",
    video: "./reels/video1.mp4",
    userProfile: "https://images.unsplash.com/photo-1582335231349-7dc26866d9a7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 140,
    isFollowed: true
  },
  {
    username: "musicvibes",
    likeCount: 5020,
    isLiked: false,
    commentCount: 120,
    caption: "Old school beats 🔥",
    video: "./reels/video4.mp4",
    userProfile: "https://images.unsplash.com/photo-1541980162-745179a89211?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 48,
    isFollowed: false
  },
  {
    username: "dailyquotes",
    likeCount: 1990,
    isLiked: true,
    commentCount: 80,
    caption: "Discipline beats motivation.",
    video: "./reels/video3.mp4",
    userProfile: "https://images.unsplash.com/photo-1541980162-745179a89211?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 34,
    isFollowed: true
  },
  {
    username: "techguruu",
    likeCount: 8600,
    isLiked: false,
    commentCount: 410,
    caption: "React vs Next — what you should learn?",
    video: "./reels/video2.mp4",
    userProfile: "https://images.unsplash.com/photo-1541980162-745179a89211?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 220,
    isFollowed: false
  },
  {
    username: "streetartist",
    likeCount: 3120,
    isLiked: true,
    commentCount: 150,
    caption: "New wall art in the city.",
    video: "./reels/video1.mp4",
    userProfile: "https://images.unsplash.com/photo-1541980162-745179a89211?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 65,
    isFollowed: true
  },
  {
    username: "petlover",
    likeCount: 7800,
    isLiked: false,
    commentCount: 500,
    caption: "Cutest dog ever 🐶💛",
    video: "./reels/video2.mp4",
    userProfile: "https://images.unsplash.com/photo-1541980162-745179a89211?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 310,
    isFollowed: false
  }
];

var allReels = document.querySelector('.all-reels')


var sum = ''

function addData(){
    reels.forEach(function(elem,idx){
    sum = sum + `<div class="reel">
                    <video autoplay loop muted src="${elem.video}"></video>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userProfile}" alt="">
                            <h1>${elem.username}</h1>
                            <button id="follow">${elem.isFollowed?'Unfollow':'Follow'}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                        <div id="${idx}" class="like">
                            <h4 class="like-icon"> ${elem.isLiked?'<i class="ri-heart-fill"></i>':'<i class="ri-heart-line"></i>'}</h4>
                            <h6>${elem.likeCount}</h6>
                        </div>

                        <div class="comment">
                            <h4 class="comment-icon"> <i class="ri-chat-1-line"></i> </h4>
                            <h6>${elem.commentCount}</h6>
                        </div>

                        <div class="share">
                            <h4 class="share-icon"> <i class="ri-send-plane-fill"></i> </h4>
                            <h6>${elem.shareCount}</h6>
                        </div>

                        <div class="save">
                            <h4 class="save-icon"> <i class="ri-bookmark-line"></i> </h4>
                        </div>

                        <div class="menu">
                            <h4 class="menu-icon"> <i class="ri-more-2-line"></i> </h4>
                        </div>


                    </div>
                </div>`

                
    
})

allReels.innerHTML = sum

}




