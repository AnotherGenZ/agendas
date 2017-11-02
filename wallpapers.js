angular.module("agendasApp")
  .value("wallpapers", {
    images: {
      "supermoon-over-san-francisco": {
        name: "Supermoon Over San Francisco",
        url: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Supermoon_over_San_Francisco%2C_November_2016.jpg",
        credit: "By Dllu (Own work) [CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0)], via Wikimedia Commons",
        creditURL: "https://commons.wikimedia.org/wiki/File%3ASupermoon_over_San_Francisco%2C_November_2016.jpg"
      },
      "san-francisco-ferry-building-dawn": {
        name: "San Francisco Ferry Building at Dawn",
        url: "https://upload.wikimedia.org/wikipedia/commons/6/6c/San_Francisco_Ferry_Building_at_Dawn.jpg",
        credit: "By Brooklyn Peach (Own work) [CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0)], via Wikimedia Commons",
        creditURL: "https://commons.wikimedia.org/wiki/File%3ASan_Francisco_Ferry_Building_at_Dawn.jpg"
      },
      "san-francisco-skyline": {
        name: "San Francisco Skyline from Coit Tower",
        url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/San_Francisco_skyline_from_Coit_Tower.jpg",
        credit: "By Supercarwaar (Own work) [CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0)], via Wikimedia Commons",
        creditURL: "https://commons.wikimedia.org/wiki/File%3ASan_Francisco_skyline_from_Coit_Tower.jpg"
      },
      "san-francisco-sunset": {
        name: "San Francisco (Sunset)",
        url: "https://upload.wikimedia.org/wikipedia/commons/4/43/San_Francisco_%28Sunset%29.jpg",
        credit: "By Basil D Soufi (Own work) [CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0)], via Wikimedia Commons",
        creditURL: "https://commons.wikimedia.org/wiki/File%3ASan_Francisco_(Sunset).jpg"
      },
      "shanghai-view": {
        name: "Shanghaiviewpic1",
        url: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Shanghaiviewpic1.jpg",
        credit: "By dawvon (Pudong) [CC BY 2.0 (http://creativecommons.org/licenses/by/2.0)], via Wikimedia Commons",
        creditURL: "https://commons.wikimedia.org/wiki/File%3AShanghaiviewpic1.jpg"
      },
      "shanghai-skyline": {
        name: "Shanghai Skyline, Dec 2014",
        url: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Shanghai_Skyline%2C_Dec2014.jpg",
        credit: "By Simon Desmarais [CC BY-SA 2.0 (https://creativecommons.org/licenses/by-sa/2.0)], via Wikimedia Commons",
        creditURL: "https://commons.wikimedia.org/wiki/File%3AShanghai_Skyline%2C_Dec2014.jpg"
      },
      "shanghai-century-park": {
        name: "Shanghai Century Park at Sunset",
        url: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Shanghai_Century_park_at_sunset.jpg",
        credit: "By Mgmoscatello (Own work) [CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0)], via Wikimedia Commons",
        creditURL: "https://commons.wikimedia.org/wiki/File%3AShanghai_Century_park_at_sunset.jpg"
      },
      "dawn-of-shanghai": {
        name: "Dawn of Shanghai",
        url: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Dawn_of_Shanghai.JPG",
        credit: "By Leoyunyi (Own work) [CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0)], via Wikimedia Commons",
        creditURL: "https://commons.wikimedia.org/wiki/File%3ADawn_of_Shanghai.JPG"
      },
      "tahrir-square-early-morning": {
        name: "Tahrir Square, Cairo, in the early morning",
        url: "https://upload.wikimedia.org/wikipedia/commons/7/74/Tahrir_Square%2C_Cairo%2C_in_the_early_morning_-_c.jpg",
        credit: "By Tahrir_Square,_Cairo,_in_the_early_morning.jpg: Frank Schulenburg Derivative work including contrast increase, noise correction and minor changes: Julian Herzog [CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0)], via Wikimedia Commons",
        creditURL: "https://commons.wikimedia.org/wiki/File%3ATahrir_Square%2C_Cairo%2C_in_the_early_morning_-_c.jpg"
      },
      "view-from-the-cairo": {
        name: "View from The Cairo - facing north",
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/View_from_The_Cairo_-_facing_north.jpg",
        credit: "Carol M. Highsmith [Public domain], via Wikimedia Commons",
        creditURL: "https://commons.wikimedia.org/wiki/File%3AView_from_The_Cairo_-_facing_north.jpg"
      },
      "late-evening-in-cairo": {
        name: "Late evening in Cairo",
        url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Late_evening_in_Cairo.jpg",
        credit: "By Frank Schulenburg (Own work) [CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0)], via Wikimedia Commons",
        creditURL: "https://commons.wikimedia.org/wiki/File%3ALate_evening_in_Cairo.jpg"
      },
      "cairo-at-night": {
        name: "Cairo at night",
        url: "https://upload.wikimedia.org/wikipedia/commons/9/91/Cairo_at_night_..jpg",
        credit: "By Maro tharwat (Own work) [CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0)], via Wikimedia Commons",
        creditURL: "https://commons.wikimedia.org/wiki/File%3ACairo_at_night_..jpg"
      },
      "london-from-a-hot-air-balloon": {
        name: "London from a hot air balloon",
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3a/London_from_a_hot_air_balloon.jpg",
        credit: "By Daniel Chapma (Flickr) [CC BY 2.0 (http://creativecommons.org/licenses/by/2.0)], via Wikimedia Commons",
        creditURL: "https://commons.wikimedia.org/wiki/File%3ALondon_from_a_hot_air_balloon.jpg"
      },
      "tower-of-london-white-tower": {
        name: "Tower of London White Tower",
        url: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Tower_of_London_White_Tower.jpg",
        credit: "By Bernard Gagnon (Own work) [GFDL (http://www.gnu.org/copyleft/fdl.html) or CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0)], via Wikimedia Commons",
        creditURL: "https://commons.wikimedia.org/wiki/File%3ATower_of_London_White_Tower.jpg"
      },
      "tower-bridge-london-dusk": {
        name: "Tower Bridge London Dusk",
        url: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Tower_Bridge_London_Dusk_Feb_2006.jpg",
        credit: "By Diliff (Own work) [CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0) or GFDL (http://www.gnu.org/copyleft/fdl.html)], via Wikimedia Commons",
        creditURL: "https://commons.wikimedia.org/wiki/File%3ATower_Bridge_London_Dusk_Feb_2006.jpg"
      },
      "london-eye-at-night": {
        name: "London Eye at Night",
        url: "https://upload.wikimedia.org/wikipedia/commons/b/b5/London_Eye_at_night_3.jpg",
        credit: "Photograph by Mike Peel (www.mikepeel.net). [CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0)], via Wikimedia Commons",
        creditURL: "https://commons.wikimedia.org/wiki/File%3ALondon_Eye_at_night_3.jpg"
      },
      "sydney-harbour-bridge-dawn": {
        name: "Sydney harbour bridge dawn",
        url: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Sydney_harbour_bridge_dawn.jpg",
        credit: "By Please refer to actuarial disco boy in wikipedia (Own work) [Public domain], via Wikimedia Commons",
        creditURL: "https://commons.wikimedia.org/wiki/File%3ASydney_harbour_bridge_dawn.jpg"
      },
      "sydney-skyline-from-the-north-aerial": {
        name: "Sydney skyline from the north aerial",
        url: "https://upload.wikimedia.org/wikipedia/commons/7/72/Sydney_skyline_from_the_north_aerial_2010.jpg",
        credit: "By Beau Giles (http://www.flickr.com/photos/beaugiles/5245075698) [CC BY 2.0 (http://creativecommons.org/licenses/by/2.0)], via Wikimedia Commons",
        creditURL: "https://commons.wikimedia.org/wiki/File%3ASydney_skyline_from_the_north_aerial_2010.jpg"
      },
      "sydney-opera-house-sunset": {
        name: "Sydney Opera House Sunset - panoramio",
        url: "https://upload.wikimedia.org/wikipedia/commons/7/76/Sydney_Opera_House_Sunset_-_panoramio.jpg",
        credit: "Danijel James [CC BY 3.0 (http://creativecommons.org/licenses/by/3.0)], via Wikimedia Commons",
        creditURL: "https://commons.wikimedia.org/wiki/File%3ASydney_Opera_House_Sunset_-_panoramio.jpg"
      },
      "sydney-opera-house-night": {
        name: "Sydney Opera House Night",
        url: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Sydney_Opera_House_Night.jpg",
        credit: "By No machine-readable author provided. AnthonyWinning assumed (based on copyright claims). [GFDL (http://www.gnu.org/copyleft/fdl.html), CC-BY-SA-3.0 (http://creativecommons.org/licenses/by-sa/3.0/) or CC BY 2.5 (http://creativecommons.org/licenses/by/2.5)], via Wikimedia Commons",
        creditURL: "https://commons.wikimedia.org/wiki/File%3ASydney_Opera_House_Night.jpg"
      },
      "amazon-rainforest": {
        name: "Amazon Rainforest",
        url: "https://c1.staticflickr.com/7/6091/6285070575_1cfae9eb7d_b.jpg"
      },
      "times-square": {
        name: "Times Square",
        url: "https://upload.wikimedia.org/wikipedia/commons/1/19/Times_Square,_New_York_City_(HDR).jpg",
        credit: "By Francisco Diez from New Jersey, USA (Times Square, NYC) [CC BY 2.0 (http://creativecommons.org/licenses/by/2.0)], via Wikimedia Commons",
        creditURL: "https://commons.wikimedia.org/wiki/File%3ATimes_Square%2C_New_York_City_(HDR).jpg"
      },
      "sushi": {
        name: "Sushi",
        url: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Western_Sushi.jpg"
      },
      "doge": {
        name: "Doge",
        url: "http://vignette1.wikia.nocookie.net/sanicsource/images/9/97/Doge.jpg/revision/latest?cb=20160112233015"
      }
    },
    options: {
      "san-francisco": {
        name: "San Francisco, USA",
        images: {
          dawn: "san-francisco-ferry-building-dawn",
          day: "san-francisco-skyline",
          sunset: "san-francisco-sunset",
          night: "supermoon-over-san-francisco"
        }
      },
      "shanghai": {
        name: "Shanghai, China",
        images: {
          dawn: "dawn-of-shanghai",
          day: "shanghai-skyline",
          sunset: "shanghai-century-park",
          night: "shanghai-view"
        }
      },
      "cairo": {
        name: "Cairo, Egypt",
        images: {
          dawn: "tahrir-square-early-morning",
          day: "view-from-the-cairo",
          sunset: "late-evening-in-cairo",
          night: "cairo-at-night"
        }
      },
      "london": {
        name: "London, UK",
        images: {
          dawn: "london-from-a-hot-air-balloon",
          day: "tower-of-london-white-tower",
          sunset: "tower-bridge-london-dusk",
          night: "london-eye-at-night"
        }
      },
      "sydney": {
        name: "Sydney, Australia",
        images: {
          dawn: "sydney-harbour-bridge-dawn",
          day: "sydney-skyline-from-the-north-aerial",
          sunset: "sydney-opera-house-sunset",
          night: "sydney-opera-house-night"
        }
      },
      "amazon-rainforest": true,
      "times-square": true,
      "sushi": true,
      "doge": true
    }
  })
