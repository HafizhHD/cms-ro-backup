export const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    // for(var i=0;i<file.length;i++){
    //     reader.readAsDataURL(file[i]);
    //  }
    // let file = event.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

export const getEmbedUrl = (url) => {
    // function for generating an embed link
    let finalUrl = '';
    let videoId = '';

    if (url.includes('facebook.com/')) {
        // Facebook Video
        finalUrl = 'https://www.facebook.com/plugins/video.php?href=' + encodeURIComponent(url) + '&show_text=1&width=200';

    } else if(url.includes('vimeo.com/')) {
        // Vimeo video
        videoId = typeof(url.split("vimeo.com/")[1]) !== undefined ? url.split("vimeo.com/")[1] : null;
        if (videoId.includes('&')){
            videoId = videoId.split("&")[0];
        }
        finalUrl = 'https://player.vimeo.com/video/' + videoId;

    } else if (url.includes('youtube.com/') && !url.includes('embed')) {
        // Youtube video
        videoId = typeof(url.split("v=")[1]) !== undefined ? url.split("v=")[1] : null;
        if (videoId.includes('&')){
            videoId = videoId.split("&")[0];
        }
        finalUrl = 'https://www.youtube.com/embed/' + videoId;

    } else if(url.includes('youtu.be/')) {
        // Youtube video
        videoId = typeof(url.split("youtu.be/")[1]) !== undefined ? url.split("youtu.be/")[1] : null;
        if (videoId.includes('&')) {
            videoId = videoId.split("&")[0];
        }
        finalUrl = 'https://www.youtube.com/embed/' +  videoId;

    } else if (url.includes('dailymotion.com/')) {
        // Dailymotion Video
        videoId = typeof(url.split("dailymotion.com/")[1]) !== undefined ? url.split("dailymotion.com/")[1] : null;
        if (videoId.includes('&')) {
            videoId = videoId.split("&")[0];
        }
        finalUrl = 'https://www.dailymotion.com/embed/' + videoId;

    } else{
        finalUrl = url;
    }

    return finalUrl;
}