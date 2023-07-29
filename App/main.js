
const create_post_form = document.getElementById("create_post_form");
const msg = document.querySelector(".msg");
const post_list = document.querySelector(".user_post_list");

// show post 

  const showLatestPost = () => {
      const posts = getDatals("posts");


      let content  = "";

      if(posts.length > 0 ){
           posts.reverse().map((item, index) => {
            content += `
            <div class="post-container mb-3 mx-3">
            <!------- Post Header ------>
            <div class="post-header">
                <div class="author">
                    <div class="author-profile-img">
                        <img src="${item.author_photo}" alt="">
                    </div>
                    <div class="post-author-name">
                        <a href="#">${item.author_name}</a>
                        <span><i class="fas fa-circle"></i> ${timeAgoInstagram(item.post_time)}</span>
                        <a href="#"></a>
                        <p>${item.post_content ? item.post_content : "" }</p>
                    </div>
                </div>
                <div class="three-dot">
                    <a href="#"><i class="fas fa-ellipsis-h"></i></a>
                </div>
            </div>

            <!------ Post Body ------>
            <div class="post-body">
                <div class="post-img">
                  ${item.post_photo ? `<img src="${item.post_photo}" alt=""></img>` : ""}
                  
                </div>
                <div class="post-reaction">
                    <div class="p-reaction-left">
                        <div class="post-like post-icon">
                            <span><i class="far fa-heart"></i></span>
                        </div>
                        <div class="post-comment post-icon">
                            <span><i class="far fa-comment"></i></span>
                        </div>
                        <div class="post-share post-icon">
                            <span><i class="far fa-paper-plane"></i></span>
                        </div>
                    </div>
                    <div class="post-save post-icon">
                        <span><i class="far fa-bookmark"></i></span>
                    </div>
                </div>
                <div class="post-like-total">
                    <p>5,691,354 likes</p>
                </div>
                <div class="post-content">
                    <p> <a href="#">taylorswift</a>Cincinnati I couldn't love you more. Had the best two nights with you!!  <a href="#" class="post-tag">@taylorehill / @gettyimages</a></p>
                </div>
                <div class="write-comment">
                    <p>View all 204 comments</p>
                    <form action="#">
                        <input type="text" name="" id="" placeholder="Add a comment…">
                    </form>
                    <span><i class="far fa-smile"></i></span>
                </div>
            </div>    
          
        </div>
            
            `
           })
      }else{
        content = "<h2>no post found</h2>";
      }
      post_list.innerHTML = content;

  }
  showLatestPost();


// form submit 
create_post_form.onsubmit = (e) => {
    e.preventDefault();

    
   // get form data
   const form_data = new FormData(e.target);
   const data = Object.fromEntries(form_data.entries());

   // form validation 
   if(!data.author_name || !data.author_photo) {
      msg.innerHTML = createAlert("Author & photo required");
   }else{
      // get prev data 
      const prevData = getDatals("posts");

      prevData.push({
        author_name  : data.author_name,
        author_photo : data.author_photo,
        post_content : data.post_content ?? null,
        post_photo   : data.post_photo ?? null,
        post_time    : Date.now(),
      });

      // send data to ls
      sendDatals("posts",prevData );

      showLatestPost();

      e.target.reset();
   };




};














