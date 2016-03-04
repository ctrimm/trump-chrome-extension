// Links to pictures of Nicholas Cage
var TRUMP_URLS = [
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

function getRandomImage() {
    return TRUMP_URLS[Math.floor(Math.random() * TRUMP_URLS.length)];
}

var images = document.getElementsByTagName("img");

for (var i = 0; i < images.length; i++) {
    var image = images[i];
  image.src = getRandomImage();
  console.log(image);
}