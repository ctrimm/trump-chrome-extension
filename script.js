// Links to pictures of Donald Trump
// document.addEventListener('DOMContentLoaded', function (event) {

    var SMALL_TRUMP_IMAGES = [
        'https://pbs.twimg.com/profile_images/677236648690753536/et9NgW4w.jpg',
        'http://burninbrains.com/wp-content/uploads/2016/02/Cool-Or-Fool-Donald-Trump.png',
        'https://pbs.twimg.com/profile_images/678954416179843072/fImdKthS.jpg',
        'https://pbs.twimg.com/profile_images/623512768377794560/BJC9anEC.jpg',
        'https://pbs.twimg.com/profile_images/649272612997210112/u2cilcdq.jpg',
        'https://pbs.twimg.com/profile_images/622622832103587840/tUKC5wZD.jpg',
        'https://pbs.twimg.com/profile_images/614526496112144385/O_p28XM2.jpg'
    ];

    var MEDIUM_TRUMP_IMAGES = [
        'http://inthesetimes.com/images/articles/trump_flicker_face_yess.jpg',
        'http://media.salon.com/2015/07/donald_trump9.jpg',
        'https://vice-images.vice.com/images/articles/crops/2015/07/01/donald-trump-is-losing-his-insane-pr-war-against-mexico-1435778037-crop_mobile.jpg?resize=*:*&output-quality=75',
        'http://cdn1.theodysseyonline.com/files/2015/11/22/635838115365780122-901575687_6358235333419573281092854367_donald-trump.jpg',
        'https://www.thewrap.com/wp-content/uploads/2015/12/Donald-Trump-Media-Outlets-Roasting.jpg',
        'http://media.salon.com/2015/07/donald_trump6.jpg',
        'http://i2.cdn.turner.com/cnnnext/dam/assets/150616161704-donald-trump-june-16-2015-large-169.jpg',
        'http://media.breitbart.com/media/2015/07/GettyImages-479726874-e1436388881883.jpg'
    ];

    var LARGE_TRUMP_IMGS = [
        'http://static6.businessinsider.com/image/55918b77ecad04a3465a0a63/nbc-fires-donald-trump-after-he-calls-mexicans-rapists-and-drug-runners.jpg',
        'http://media3.s-nbcnews.com/j/newscms/2015_33/1165401/150810-donald-trump-debate-743a_ded2a0af932f2c2332757273ea911da2.nbcnews-fp-1200-800.jpg',
        'http://static2.businessinsider.com/image/55805fececad046633bc01aa/donald-trump-got-only-8-words-into-his-campaign-before-we-found-a-seriously-questionable-fact.jpg',
        'http://s.newsweek.com/sites/www.newsweek.com/files/2015/08/04/donald-trump.jpg',
        'http://www.slate.com/content/dam/slate/blogs/the_slatest/2015/07/30/donald_trump_revelations_media_vetting_is_so_far_not_eroding_his_support/482327612-republican-presidential-candidate-donald-trump-gives.jpg.CROP.promo-xlarge2.jpg',
        'https://s3-us-west-2.amazonaws.com/vdare-live/wp-content/uploads/2015/10/donald-trump-make-america-great.jpg',
        'http://static2.businessinsider.com/image/55d5d78fecad04766dbf52a8/how-much-donald-trump-makes-in-speaking-fees-compared-to-everyone-else.jpg',
        'http://i2.cdn.turner.com/cnnnext/dam/assets/150401135040-donald-trump-gallery-8-super-169.jpg',
        'http://static1.businessinsider.com/image/56537c78c281449f018b4d5a/donald-trump-slams-pfizers-disgusting-megamerger.jpg'
    ];

    function getRandomSmallImage() {
        return SMALL_TRUMP_IMAGES[Math.floor(Math.random() * SMALL_TRUMP_IMAGES.length)];
    }

    function getRandomMediumImage() {
        return MEDIUM_TRUMP_IMAGES[Math.floor(Math.random() * MEDIUM_TRUMP_IMAGES.length)];
    }

    function getRandomLargeImage() {
        return LARGE_TRUMP_IMGS[Math.floor(Math.random() * LARGE_TRUMP_IMGS.length)];
    }

    function imageSize(image) {
        var length = image.length;
        var height = image.height;

        if((length+height) < 513){
            return 'small';
        } else if((length+height) < 2000) {
            return 'medium';
        } else {
            return 'large';
        }
    }

    var images = document.getElementsByTagName("img");

    for (var i = 0; i < images.length; i++) {
        var image = images[i];
        size = imageSize(image);

        if(size == 'small'){
            image.src = getRandomSmallImage();
        } else if(size == 'medium'){
            image.src = getRandomMediumImage();
        } else {
            image.src = getRandomLargeImage();
            image.srcset 
        }
    }
// });
