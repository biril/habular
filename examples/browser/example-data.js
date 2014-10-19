/* jshint browser:true */

(function () {
  'use strict';

  // Foursquare's take on Berlin during June '13
  window.exampleData = [{"id":"4be5826a78e895219ea964ce","name":"Alexanderplatz","contact":{},"location":{"address":"Alexanderplatz","lat":52.52180923969346,"lng":13.412654399871826,"distance":165,"postalCode":"10179","city":"Berlin","state":"Berlin","country":"Germany","cc":"DE"},"canonicalUrl":"https:\/\/foursquare.com\/v\/alexanderplatz\/4be5826a78e895219ea964ce","categories":[{"id":"4bf58dd8d48988d164941735","name":"Plaza","pluralName":"Plazas","shortName":"Plaza \/ Square","icon":{"prefix":"https:\/\/foursquare.com\/img\/categories_v2\/parks_outdoors\/plaza_","suffix":".png"},"primary":true}],"verified":false,"restricted":true,"stats":{"checkinsCount":33302,"usersCount":14042,"tipCount":95},"url":"http:\/\/www.berlin.de","likes":{"count":0,"groups":[]},"specials":{"count":0,"items":[]},"hereNow":{"count":3,"groups":[{"type":"others","name":"Other people here","count":3,"items":[]}]},"referralId":"v-1370807918"},{"id":"4adcda72f964a520434521e3","name":"Park Inn by Radisson","contact":{"phone":"+493023890","formattedPhone":"+49 30 23890"},"location":{"address":"Alexanderplatz 7","lat":52.52276232628325,"lng":13.412772417068481,"distance":60,"postalCode":"10178","city":"Berlin","state":"Berlin","country":"Germany","cc":"DE"},"canonicalUrl":"https:\/\/foursquare.com\/v\/park-inn-by-radisson\/4adcda72f964a520434521e3","categories":[{"id":"4bf58dd8d48988d1fa931735","name":"Hotel","pluralName":"Hotels","shortName":"Hotel","icon":{"prefix":"https:\/\/foursquare.com\/img\/categories_v2\/travel\/hotel_","suffix":".png"},"primary":true}],"verified":true,"restricted":true,"stats":{"checkinsCount":3045,"usersCount":1520,"tipCount":41},"url":"http:\/\/www.parkinn-berlin.com","likes":{"count":0,"groups":[]},"specials":{"count":0,"items":[]},"hereNow":{"count":1,"groups":[{"type":"others","name":"Other people here","count":1,"items":[]}]},"referralId":"v-1370807918"},{"id":"4b795396f964a52019f42ee3","name":"Burger King","contact":{"phone":"+49302415672","formattedPhone":"+49 30 2415672"},"location":{"address":"Alexanderpl. 8","lat":52.522670935314835,"lng":13.412675857543945,"distance":70,"postalCode":"10178","city":"Berlin","state":"BE","country":"Germany","cc":"DE"},"canonicalUrl":"https:\/\/foursquare.com\/v\/burger-king\/4b795396f964a52019f42ee3","categories":[{"id":"4bf58dd8d48988d16e941735","name":"Fast Food Restaurant","pluralName":"Fast Food Restaurants","shortName":"Fast Food","icon":{"prefix":"https:\/\/foursquare.com\/img\/categories_v2\/food\/fastfood_","suffix":".png"},"primary":true}],"verified":false,"restricted":true,"stats":{"checkinsCount":834,"usersCount":597,"tipCount":14},"url":"http:\/\/www.burgerking.de","likes":{"count":0,"groups":[]},"specials":{"count":0,"items":[]},"hereNow":{"count":0,"groups":[]},"referralId":"v-1370807918"},{"id":"4af556a8f964a520d4f821e3","name":"Galeria Kaufhof","contact":{"phone":"+4930247430","formattedPhone":"+49 30 247430"},"location":{"address":"Alexanderpl. 9","lat":52.52210097812053,"lng":13.412049029522118,"distance":140,"postalCode":"10178","city":"Berlin","country":"Germany","cc":"DE"},"canonicalUrl":"https:\/\/foursquare.com\/v\/galeria-kaufhof\/4af556a8f964a520d4f821e3","categories":[{"id":"4bf58dd8d48988d1f6941735","name":"Department Store","pluralName":"Department Stores","shortName":"Department Store","icon":{"prefix":"https:\/\/foursquare.com\/img\/categories_v2\/shops\/departmentstore_","suffix":".png"},"primary":true}],"verified":false,"restricted":true,"stats":{"checkinsCount":6426,"usersCount":3169,"tipCount":37},"url":"http:\/\/www.galeria-kaufhof.de","likes":{"count":0,"groups":[]},"specials":{"count":0,"items":[]},"hereNow":{"count":0,"groups":[]},"referralId":"v-1370807918"},{"id":"4b3a0ee2f964a5209c6025e3","name":"Spagos Restaurant, Bar & Lounge","contact":{"phone":"+493023890","formattedPhone":"+49 30 23890"},"location":{"address":"Alexanderplatz 7","lat":52.52302344228822,"lng":13.412976264953613,"distance":36,"postalCode":"10178","city":"Berlin","state":"Germany","country":"Germany","cc":"DE"},"canonicalUrl":"https:\/\/foursquare.com\/v\/spagos-restaurant-bar--lounge\/4b3a0ee2f964a5209c6025e3","categories":[{"id":"4bf58dd8d48988d1c4941735","name":"Restaurant","pluralName":"Restaurants","shortName":"Restaurant","icon":{"prefix":"https:\/\/foursquare.com\/img\/categories_v2\/food\/default_","suffix":".png"},"primary":true}],"verified":true,"restricted":true,"stats":{"checkinsCount":197,"usersCount":142,"tipCount":2},"url":"http:\/\/www.spagos.de","likes":{"count":0,"groups":[]},"specials":{"count":0,"items":[]},"hereNow":{"count":0,"groups":[]},"referralId":"v-1370807918"},{"id":"4b228c0ff964a520c74824e3","name":"Escados","contact":{},"location":{"address":"Karl-Liebknecht-Str. 29","lat":52.5242049728089,"lng":13.411471724466537,"distance":130,"postalCode":"10178","city":"Berlin","state":"BE","country":"Germany","cc":"DE"},"canonicalUrl":"https:\/\/foursquare.com\/v\/escados\/4b228c0ff964a520c74824e3","categories":[{"id":"4bf58dd8d48988d1cc941735","name":"Steakhouse","pluralName":"Steakhouses","shortName":"Steakhouse","icon":{"prefix":"https:\/\/foursquare.com\/img\/categories_v2\/food\/steakhouse_","suffix":".png"},"primary":true}],"verified":false,"restricted":true,"stats":{"checkinsCount":465,"usersCount":377,"tipCount":9},"likes":{"count":0,"groups":[]},"specials":{"count":0,"items":[]},"hereNow":{"count":0,"groups":[]},"referralId":"v-1370807918"},{"id":"4c2341569a67a59306b0dd87","name":"Europcar 24h","contact":{},"location":{"address":"Alexanderplatz 8","crossStreet":"Park Inn Hotel","lat":52.52302344228822,"lng":13.412246704101562,"distance":43,"postalCode":"10178","city":"Berlin","country":"Germany","cc":"DE"},"canonicalUrl":"https:\/\/foursquare.com\/v\/europcar-24h\/4c2341569a67a59306b0dd87","categories":[{"id":"4bf58dd8d48988d1ef941735","name":"Rental Car Location","pluralName":"Rental Car Locations","shortName":"Rental Car","icon":{"prefix":"https:\/\/foursquare.com\/img\/categories_v2\/shops\/airport_rentalcar_","suffix":".png"},"primary":true}],"verified":false,"restricted":true,"stats":{"checkinsCount":202,"usersCount":101,"tipCount":2},"likes":{"count":0,"groups":[]},"specials":{"count":0,"items":[]},"hereNow":{"count":0,"groups":[]},"referralId":"v-1370807918"},{"id":"4af838aef964a520740b22e3","name":"Berliner Verlag","contact":{},"location":{"address":"Karl-Liebknecht Str. 29","lat":52.52412357772763,"lng":13.41223637331852,"distance":96,"postalCode":"10178","city":"Berlin","state":"BE","country":"Germany","cc":"DE"},"canonicalUrl":"https:\/\/foursquare.com\/v\/berliner-verlag\/4af838aef964a520740b22e3","categories":[{"id":"4bf58dd8d48988d124941735","name":"Office","pluralName":"Offices","shortName":"Corporate \/ Office","icon":{"prefix":"https:\/\/foursquare.com\/img\/categories_v2\/building\/default_","suffix":".png"},"primary":true}],"verified":false,"restricted":true,"stats":{"checkinsCount":938,"usersCount":122,"tipCount":1},"likes":{"count":0,"groups":[]},"specials":{"count":0,"items":[]},"hereNow":{"count":0,"groups":[]},"referralId":"v-1370807918"},{"id":"4c83b0a2d8086dcbc4ee8152","name":"Döner Inn","contact":{},"location":{"address":"Alexanderplatz","lat":52.523227081694806,"lng":13.411515758562285,"distance":80,"postalCode":"10178","city":"Berlin","state":"Berlin","country":"Germany","cc":"DE"},"canonicalUrl":"https:\/\/foursquare.com\/v\/d%C3%B6ner-inn\/4c83b0a2d8086dcbc4ee8152","categories":[{"id":"4bf58dd8d48988d10b941735","name":"Falafel Restaurant","pluralName":"Falafel Restaurants","shortName":"Falafel","icon":{"prefix":"https:\/\/foursquare.com\/img\/categories_v2\/food\/falafel_","suffix":".png"},"primary":true}],"verified":false,"restricted":true,"stats":{"checkinsCount":151,"usersCount":133,"tipCount":7},"likes":{"count":0,"groups":[]},"specials":{"count":0,"items":[]},"hereNow":{"count":0,"groups":[]},"referralId":"v-1370807918"},{"id":"4fa14c21e4b0753bed8eb6ca","name":"ADAC Geschäftsstelle","contact":{},"location":{"address":"Alexanderstr. 1","lat":52.52368376788289,"lng":13.412394943881086,"distance":47,"city":"Berlin","country":"Germany","cc":"DE"},"canonicalUrl":"https:\/\/foursquare.com\/v\/adac-gesch%C3%A4ftsstelle\/4fa14c21e4b0753bed8eb6ca","categories":[{"id":"4bf58dd8d48988d130941735","name":"Building","pluralName":"Buildings","shortName":"Building","icon":{"prefix":"https:\/\/foursquare.com\/img\/categories_v2\/building\/default_","suffix":".png"},"primary":true}],"verified":false,"restricted":true,"stats":{"checkinsCount":24,"usersCount":14,"tipCount":1},"likes":{"count":0,"groups":[]},"specials":{"count":0,"items":[]},"hereNow":{"count":0,"groups":[]},"referralId":"v-1370807918"},{"id":"4c45d0202d3ec9b6bac430ae","name":"Roof Terrace at Park Inn by Radisson","contact":{"phone":"+493023890","formattedPhone":"+49 30 23890"},"location":{"address":"Alexanderplatz 7","lat":52.522749270442254,"lng":13.41282606124878,"distance":61,"postalCode":"10178","city":"Berlin","state":"Berlin","country":"Germany","cc":"DE"},"canonicalUrl":"https:\/\/foursquare.com\/v\/roof-terrace-at-park-inn-by-radisson\/4c45d0202d3ec9b6bac430ae","categories":[{"id":"4bf58dd8d48988d133951735","name":"Roof Deck","pluralName":"Roof Decks","shortName":"Roof Deck","icon":{"prefix":"https:\/\/foursquare.com\/img\/categories_v2\/travel\/hotel_roofdeck_","suffix":".png"},"primary":true}],"verified":false,"restricted":true,"stats":{"checkinsCount":137,"usersCount":109,"tipCount":2},"url":"http:\/\/www.parkinn-berlin.de","likes":{"count":0,"groups":[]},"specials":{"count":0,"items":[]},"hereNow":{"count":0,"groups":[]},"referralId":"v-1370807918"},{"id":"4d3803386eef5481bea83c48","name":"Fielmann","contact":{},"location":{"address":"Alexanderplatz 8","lat":52.52250120872617,"lng":13.412761688232422,"distance":89,"postalCode":"10178","city":"Berlin","state":"BE","country":"Germany","cc":"DE"},"canonicalUrl":"https:\/\/foursquare.com\/v\/fielmann\/4d3803386eef5481bea83c48","categories":[{"id":"4d954afda243a5684865b473","name":"Optical Shop","pluralName":"Optical Shops","shortName":"Optical Shops","icon":{"prefix":"https:\/\/foursquare.com\/img\/categories_v2\/building\/medical_opticalshop_","suffix":".png"},"primary":true}],"verified":false,"restricted":true,"stats":{"checkinsCount":89,"usersCount":51,"tipCount":0},"likes":{"count":0,"groups":[]},"specials":{"count":0,"items":[]},"hereNow":{"count":0,"groups":[]},"referralId":"v-1370807918"},{"id":"4f2c0d10e4b09e391d56db8d","name":"Galeria Gourmet","contact":{},"location":{"address":"Galeria Kaufhof","crossStreet":"Alexanderplatz 9","lat":52.52248815280757,"lng":13.411431312561035,"distance":124,"postalCode":"10178","city":"Berlin","state":"Berlin","country":"Germany","cc":"DE"},"canonicalUrl":"https:\/\/foursquare.com\/v\/galeria-gourmet\/4f2c0d10e4b09e391d56db8d","categories":[{"id":"4bf58dd8d48988d1f5941735","name":"Gourmet Shop","pluralName":"Gourmet Shops","shortName":"Gourmet","icon":{"prefix":"https:\/\/foursquare.com\/img\/categories_v2\/shops\/food_gourmet_","suffix":".png"},"primary":true}],"verified":false,"restricted":true,"stats":{"checkinsCount":189,"usersCount":109,"tipCount":1},"likes":{"count":0,"groups":[]},"specials":{"count":0,"items":[]},"hereNow":{"count":0,"groups":[]},"referralId":"v-1370807918"},{"id":"4ba9c00bf964a520b9363ae3","name":"Bistro & Kaffeehaus am Alex","contact":{},"location":{"address":"Alexanderplatz 8","lat":52.522098075771474,"lng":13.41266938435254,"distance":133,"postalCode":"10178","city":"Berlin","state":"Berlin","country":"Germany","cc":"DE"},"canonicalUrl":"https:\/\/foursquare.com\/v\/bistro--kaffeehaus-am-alex\/4ba9c00bf964a520b9363ae3","categories":[{"id":"4bf58dd8d48988d10d941735","name":"German Restaurant","pluralName":"German Restaurants","shortName":"German","icon":{"prefix":"https:\/\/foursquare.com\/img\/categories_v2\/food\/german_","suffix":".png"},"primary":true}],"verified":false,"restricted":true,"stats":{"checkinsCount":270,"usersCount":252,"tipCount":12},"likes":{"count":0,"groups":[]},"specials":{"count":0,"items":[]},"hereNow":{"count":0,"groups":[]},"referralId":"v-1370807918"},{"id":"4f8d1b4ce4b0b14f6c725df5","name":"Berolina Haus","contact":{},"location":{"address":"Alexanderplatz 1, 10178 Berlin","lat":52.52318214004614,"lng":13.41182209352848,"distance":60,"postalCode":"10178","city":"Berlin","state":"Berlin","country":"Germany","cc":"DE"},"canonicalUrl":"https:\/\/foursquare.com\/v\/berolina-haus\/4f8d1b4ce4b0b14f6c725df5","categories":[{"id":"4bf58dd8d48988d130941735","name":"Building","pluralName":"Buildings","shortName":"Building","icon":{"prefix":"https:\/\/foursquare.com\/img\/categories_v2\/building\/default_","suffix":".png"},"primary":true}],"verified":false,"restricted":true,"stats":{"checkinsCount":3,"usersCount":3,"tipCount":0},"likes":{"count":0,"groups":[]},"specials":{"count":0,"items":[]},"hereNow":{"count":0,"groups":[]},"referralId":"v-1370807918"},{"id":"5072fbd7e4b0ddd46a831e99","name":"Lässig rumstehen","contact":{},"location":{"lat":52.521912199593004,"lng":13.41211736721229,"distance":159,"country":"Germany","cc":"DE"},"canonicalUrl":"https:\/\/foursquare.com\/v\/l%C3%A4ssig-rumstehen\/5072fbd7e4b0ddd46a831e99","categories":[{"id":"4bf58dd8d48988d15b941735","name":"Farm","pluralName":"Farms","shortName":"Farm","icon":{"prefix":"https:\/\/foursquare.com\/img\/categories_v2\/parks_outdoors\/farm_","suffix":".png"},"primary":true}],"verified":false,"restricted":true,"stats":{"checkinsCount":82,"usersCount":41,"tipCount":0},"likes":{"count":0,"groups":[]},"specials":{"count":0,"items":[]},"hereNow":{"count":0,"groups":[]},"referralId":"v-1370807918"},{"id":"4cef865f13aea143359a739f","name":"Q-Park am Alex","contact":{},"location":{"lat":52.52345786314001,"lng":13.413630223539842,"distance":65,"country":"Germany","cc":"DE"},"canonicalUrl":"https:\/\/foursquare.com\/v\/qpark-am-alex\/4cef865f13aea143359a739f","categories":[{"id":"4c38df4de52ce0d596b336e1","name":"Parking","pluralName":"Parking","shortName":"Parking","icon":{"prefix":"https:\/\/foursquare.com\/img\/categories_v2\/building\/parking_","suffix":".png"},"primary":true}],"verified":false,"restricted":true,"stats":{"checkinsCount":35,"usersCount":26,"tipCount":0},"likes":{"count":0,"groups":[]},"specials":{"count":0,"items":[]},"hereNow":{"count":0,"groups":[]},"referralId":"v-1370807918"},{"id":"510f6b36e4b01d3afcee3361","name":"s75","contact":{},"location":{"lat":52.52269744873047,"lng":13.411910057067871,"distance":85,"country":"Germany","cc":"DE"},"canonicalUrl":"https:\/\/foursquare.com\/v\/s75\/510f6b36e4b01d3afcee3361","categories":[{"id":"4bf58dd8d48988d1fc931735","name":"Light Rail","pluralName":"Light Rails","shortName":"Light Rail","icon":{"prefix":"https:\/\/foursquare.com\/img\/categories_v2\/travel\/lightrail_","suffix":".png"},"primary":true}],"verified":false,"restricted":true,"stats":{"checkinsCount":14,"usersCount":3,"tipCount":0},"likes":{"count":0,"groups":[]},"specials":{"count":0,"items":[]},"hereNow":{"count":0,"groups":[]},"referralId":"v-1370807918"},{"id":"4b0cfa95f964a520ef4223e3","name":"Ristorante Pizzeria Romantica","contact":{},"location":{"address":"Memhardstr. 3","lat":52.52410379326268,"lng":13.41154396533966,"distance":118,"postalCode":"10178","city":"Berlin","country":"Germany","cc":"DE"},"canonicalUrl":"https:\/\/foursquare.com\/v\/ristorante-pizzeria-romantica\/4b0cfa95f964a520ef4223e3","categories":[{"id":"4bf58dd8d48988d1ca941735","name":"Pizza Place","pluralName":"Pizza Places","shortName":"Pizza","icon":{"prefix":"https:\/\/foursquare.com\/img\/categories_v2\/food\/pizza_","suffix":".png"},"primary":true}],"verified":false,"restricted":true,"stats":{"checkinsCount":202,"usersCount":149,"tipCount":2},"likes":{"count":0,"groups":[]},"specials":{"count":0,"items":[]},"hereNow":{"count":0,"groups":[]},"referralId":"v-1370807918"},{"id":"4bd9a527d2cbc928ff31d1ad","name":"Brunnen der Völkerfreundschaft","contact":{},"location":{"address":"Alexanderplatz","lat":52.52203119321206,"lng":13.412772417068481,"distance":141,"postalCode":"10178","city":"Berlin","country":"Germany","cc":"DE"},"canonicalUrl":"https:\/\/foursquare.com\/v\/brunnen-der-v%C3%B6lkerfreundschaft\/4bd9a527d2cbc928ff31d1ad","categories":[{"id":"4bf58dd8d48988d12d941735","name":"Monument \/ Landmark","pluralName":"Monuments \/ Landmarks","shortName":"Landmark","icon":{"prefix":"https:\/\/foursquare.com\/img\/categories_v2\/building\/government_monument_","suffix":".png"},"primary":true}],"verified":false,"restricted":true,"stats":{"checkinsCount":429,"usersCount":202,"tipCount":3},"likes":{"count":0,"groups":[]},"specials":{"count":0,"items":[]},"hereNow":{"count":0,"groups":[]},"referralId":"v-1370807918"},{"id":"4b87becdf964a520e0c931e3","name":"K&M Computer","contact":{"phone":"+493024083927","formattedPhone":"+49 30 24083927"},"location":{"address":"Alexanderstr. 3","lat":52.52398955801103,"lng":13.413834571838379,"distance":108,"postalCode":"10178","city":"Berlin","country":"Germany","cc":"DE"},"canonicalUrl":"https:\/\/foursquare.com\/v\/km-computer\/4b87becdf964a520e0c931e3","categories":[{"id":"4bf58dd8d48988d122951735","name":"Electronics Store","pluralName":"Electronics Stores","shortName":"Electronics","icon":{"prefix":"https:\/\/foursquare.com\/img\/categories_v2\/shops\/technology_","suffix":".png"},"primary":true}],"verified":false,"restricted":true,"stats":{"checkinsCount":102,"usersCount":68,"tipCount":0},"url":"http:\/\/www.kmcomputer.de\/default\/1053\/558\/0\/0\/berlinmitte.html","likes":{"count":0,"groups":[]},"specials":{"count":0,"items":[]},"hereNow":{"count":0,"groups":[]},"referralId":"v-1370807918"},{"id":"4b2fce5df964a52049f024e3","name":"Las Olas","contact":{"phone":"+4949302415472","formattedPhone":"+49 4930 2415472"},"location":{"address":"Karl-Liebknecht-Str. 29","crossStreet":"Münzstr.","lat":52.52410466837348,"lng":13.411998129006367,"distance":101,"postalCode":"10178","city":"Berlin","state":"Germany","country":"Germany","cc":"DE"},"canonicalUrl":"https:\/\/foursquare.com\/v\/las-olas\/4b2fce5df964a52049f024e3","categories":[{"id":"4bf58dd8d48988d150941735","name":"Spanish Restaurant","pluralName":"Spanish Restaurants","shortName":"Spanish","icon":{"prefix":"https:\/\/foursquare.com\/img\/categories_v2\/food\/default_","suffix":".png"},"primary":true}],"verified":false,"restricted":true,"stats":{"checkinsCount":123,"usersCount":103,"tipCount":5},"likes":{"count":0,"groups":[]},"specials":{"count":0,"items":[]},"hereNow":{"count":0,"groups":[]},"referralId":"v-1370807918"},{"id":"4f785da4e4b03b459e4226b8","name":"Asia Inn","contact":{},"location":{"lat":52.5233268737793,"lng":13.411504745483398,"distance":81,"country":"Germany","cc":"DE"},"canonicalUrl":"https:\/\/foursquare.com\/v\/asia-inn\/4f785da4e4b03b459e4226b8","categories":[{"id":"4bf58dd8d48988d1c7941735","name":"Snack Place","pluralName":"Snack Places","shortName":"Snacks","icon":{"prefix":"https:\/\/foursquare.com\/img\/categories_v2\/food\/snacks_","suffix":".png"},"primary":true}],"verified":false,"restricted":true,"stats":{"checkinsCount":3,"usersCount":3,"tipCount":0},"likes":{"count":0,"groups":[]},"specials":{"count":0,"items":[]},"hereNow":{"count":0,"groups":[]},"referralId":"v-1370807918"},{"id":"5093c7d2e4b03898af01d7af","name":"Crepes Bhf Alex","contact":{},"location":{"lat":52.522271499741834,"lng":13.412593151159541,"distance":114,"country":"Germany","cc":"DE"},"canonicalUrl":"https:\/\/foursquare.com\/v\/crepes-bhf-alex\/5093c7d2e4b03898af01d7af","categories":[{"id":"4bf58dd8d48988d148941735","name":"Donut Shop","pluralName":"Donut Shops","shortName":"Donuts","icon":{"prefix":"https:\/\/foursquare.com\/img\/categories_v2\/food\/donuts_","suffix":".png"},"primary":true}],"verified":false,"restricted":true,"stats":{"checkinsCount":13,"usersCount":11,"tipCount":0},"likes":{"count":0,"groups":[]},"specials":{"count":0,"items":[]},"hereNow":{"count":0,"groups":[]},"referralId":"v-1370807918"},{"id":"5028117de4b07f3295d0e689","name":"Panoramabar im Alex","contact":{},"location":{"lat":52.5227684466494,"lng":13.412167726349518,"distance":69,"country":"Germany","cc":"DE"},"canonicalUrl":"https:\/\/foursquare.com\/v\/panoramabar-im-alex\/5028117de4b07f3295d0e689","categories":[{"id":"4bf58dd8d48988d165941735","name":"Scenic Lookout","pluralName":"Scenic Lookouts","shortName":"Scenic Lookout","icon":{"prefix":"https:\/\/foursquare.com\/img\/categories_v2\/parks_outdoors\/sceniclookout_","suffix":".png"},"primary":true}],"verified":false,"restricted":true,"stats":{"checkinsCount":23,"usersCount":22,"tipCount":0},"likes":{"count":0,"groups":[]},"specials":{"count":0,"items":[]},"hereNow":{"count":0,"groups":[]},"referralId":"v-1370807918"},{"id":"4bead27ca9900f47f3f51640","name":"Top-Clean Vollreinigung","contact":{},"location":{"address":"Alexanderplatz 8","lat":52.52207036136366,"lng":13.412847518920898,"distance":137,"postalCode":"10178","city":"Berlin","state":"Berlin","country":"Germany","cc":"DE"},"canonicalUrl":"https:\/\/foursquare.com\/v\/topclean-vollreinigung\/4bead27ca9900f47f3f51640","categories":[{"id":"4bf58dd8d48988d1fc941735","name":"Laundry Service","pluralName":"Laundry Services","shortName":"Laundry","icon":{"prefix":"https:\/\/foursquare.com\/img\/categories_v2\/shops\/laundry_","suffix":".png"},"primary":true}],"verified":false,"restricted":true,"stats":{"checkinsCount":84,"usersCount":7,"tipCount":1},"likes":{"count":0,"groups":[]},"specials":{"count":0,"items":[]},"hereNow":{"count":0,"groups":[]},"referralId":"v-1370807918"},{"id":"4bc5a1c7ccbcef3be3b6e6d2","name":"Park Inn Parkhaus","contact":{},"location":{"address":"Alexanderplatz 7","lat":52.523088721046946,"lng":13.41231107711792,"distance":35,"postalCode":"10178","city":"Berlin","country":"Germany","cc":"DE"},"canonicalUrl":"https:\/\/foursquare.com\/v\/park-inn-parkhaus\/4bc5a1c7ccbcef3be3b6e6d2","categories":[{"id":"4bf58dd8d48988d130941735","name":"Building","pluralName":"Buildings","shortName":"Building","icon":{"prefix":"https:\/\/foursquare.com\/img\/categories_v2\/building\/default_","suffix":".png"},"primary":true}],"verified":false,"restricted":true,"stats":{"checkinsCount":65,"usersCount":44,"tipCount":0},"likes":{"count":0,"groups":[]},"specials":{"count":0,"items":[]},"hereNow":{"count":0,"groups":[]},"referralId":"v-1370807918"},{"id":"4cc6f9423d7fa1cdd170ba5f","name":"Blume 2000","contact":{},"location":{"address":"Alexanderplatz 9","lat":52.52256648826095,"lng":13.41207504272461,"distance":91,"postalCode":"10115","city":"Berlin","state":"Berlin","country":"Germany","cc":"DE"},"canonicalUrl":"https:\/\/foursquare.com\/v\/blume-2000\/4cc6f9423d7fa1cdd170ba5f","categories":[{"id":"4bf58dd8d48988d11b951735","name":"Flower Shop","pluralName":"Flower Shops","shortName":"Flower Shop","icon":{"prefix":"https:\/\/foursquare.com\/img\/categories_v2\/shops\/flowershop_","suffix":".png"},"primary":true}],"verified":false,"restricted":true,"stats":{"checkinsCount":46,"usersCount":12,"tipCount":0},"likes":{"count":0,"groups":[]},"specials":{"count":0,"items":[]},"hereNow":{"count":0,"groups":[]},"referralId":"v-1370807918"},{"id":"4d98a58e77c18eec36a37092","name":"BVG Kundencenter Alexanderplatz","contact":{},"location":{"address":"Alexanderplatz","lat":52.522096473445316,"lng":13.412632942199707,"distance":134,"city":"Berlin","state":"Germany","country":"Germany","cc":"DE"},"canonicalUrl":"https:\/\/foursquare.com\/v\/bvg-kundencenter-alexanderplatz\/4d98a58e77c18eec36a37092","categories":[{"id":"4bf58dd8d48988d1f6931735","name":"General Travel","pluralName":"General Travel","shortName":"Travel","icon":{"prefix":"https:\/\/foursquare.com\/img\/categories_v2\/travel\/default_","suffix":".png"},"primary":true}],"verified":false,"restricted":true,"stats":{"checkinsCount":24,"usersCount":22,"tipCount":2},"likes":{"count":0,"groups":[]},"specials":{"count":0,"items":[]},"hereNow":{"count":0,"groups":[]},"referralId":"v-1370807918"},{"id":"4c96027e72dd224b0b89a891","name":"Park Inn Spa","contact":{},"location":{"address":"Alexanderplatz","lat":52.52325047455,"lng":13.412958263907454,"distance":18,"city":"Berlin","state":"Berlin","country":"Germany","cc":"DE"},"canonicalUrl":"https:\/\/foursquare.com\/v\/park-inn-spa\/4c96027e72dd224b0b89a891","categories":[{"id":"4bf58dd8d48988d1ed941735","name":"Spa \/ Massage","pluralName":"Spas \/ Massages","shortName":"Spa \/ Massage","icon":{"prefix":"https:\/\/foursquare.com\/img\/categories_v2\/shops\/spa_","suffix":".png"},"primary":true}],"verified":false,"restricted":true,"stats":{"checkinsCount":12,"usersCount":7,"tipCount":2},"likes":{"count":0,"groups":[]},"specials":{"count":0,"items":[]},"hereNow":{"count":0,"groups":[]},"referralId":"v-1370807918"}];

}());
