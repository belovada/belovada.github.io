(function(){

    "use strict";

    const root = document.documentElement;
    const navToggle = document.querySelector("#js-navToggle");

    navToggle.addEventListener("click", function(){
        root.classList.toggle("show-nav");
    });

    const eventPP = document.querySelector("#js-eventPP");

    if (eventPP){
        const eventOpenBtn=document.querySelector("#js-eventOpenBtn");

        const closeEventPP = function (event){

            function close(){
                document.removeEventListener("keyup", closeEventPP);
                eventPP.removeEventListener("click", closeEventPP);

                root.classList.remove("show-event-popup");
            };

            switch(event.type){
                case "keyup":
                    if(event.key==="Escape") close();
                break;
                case "click":
                    if (event.target===this || event.target.classList.contains("js-ppCloseBtn")){
                        close();
                        break;
                    }
            }

        };

        eventOpenBtn.addEventListener("click", function(){
            root.classList.add("show-event-popup");

            document.addEventListener("keyup", closeEventPP);
            eventPP.addEventListener("click", closeEventPP);
        });

    }

    const swipers = document.querySelectorAll(".js-swiper");

    swipers.forEach(function (swpr) {
    new Swiper(swpr, {
            updateOnWindowResize: true,
            slidesPerView: "auto",
            freeMode: true,
            spaceBetween: 0,
            speed: 500,
            grabCursor: true,
            pagination: {
            el: swpr.querySelector(".swiper-pagination"),
            clickable: true
            },
            navigation: {
            nextEl: swpr.querySelector(".swiper-arrow-next"),
            prevEl: swpr.querySelector(".swiper-arrow-prev"),
            disabledClass: "arrow--disabled"
            }
        });
    });

    const contactsMap = document.querySelector("#js-contactsMap");

    if (contactsMap) {
    const mapStyles = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#242f3e"
      }
    ]
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#746855"
      }
    ]
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#242f3e"
      }
    ]
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#d59563"
      }
    ]
  },
  {
    featureType: "poi",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#d59563"
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#263c3f"
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#6b9a76"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#38414e"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#212a37"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9ca5b3"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#746855"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#1f2835"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#f3d19c"
      }
    ]
  },
  {
    featureType: "transit",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [
      {
        color: "#2f3948"
      }
    ]
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#d59563"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#17263c"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#515c6d"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#17263c"
      }
    ]
  }
]; //здесь задан JSON со стилями

    const mapCenter = new google.maps.LatLng(56.45400, 84.97838);

    const mapOptions = {
        center: mapCenter,
        disableDefaultUI: true,
        draggable: true,
        gestureHandling: "cooperative",
        scrollwheel: false,
        styles: mapStyles,
        zoom: 15,
        zoomControl: true,
        zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_BOTTOM
        }
    };

    const map = new google.maps.Map(contactsMap, mapOptions);
    }

})();
