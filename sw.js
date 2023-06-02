const STATIC_CACHE  = "static";

const APP_SHELL =[
    "/",
    "index.html",
    "reservacion.html",
    "IMG/128i.png",
    "IMG/KGL.png",
    "IMG/KNGS.png",
    "IMG/barba.png",
    "IMG/HC.png",
    "IMG/facial2.png",
    "IMG/facebook.png",
    "IMG/instagram.png",
    "IMG/gorjeo.png",
    "IMG/BBSH.png",
    "IMG/BBSH2.png",
    "IMG/BUN.png",
    "/IMG/llamada.png",
    "/IMG/wspp.png",
    "/IMG/mapa.png",
    "/IMG/gmail.png",
    "CSS/style.css",
    "CSS/style2.css",
    "CSS/style3.css",
    "https://www.facebook.com/thekingsbarbershopanahuac/?locale=es_LA",
    "https://www.instagram.com/kingbarbeershop/?hl=es",
    "https://twitter.com/kingsbarbersho1",
    "https://drive.google.com/file/d/1u49BzxlcbUvydlbw_v5__wmXx5JM7Ws2/view?usp=share_link",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.311464184748!2d-103.32916908576263!3d20.575334308479853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b2cd2006c1d5%3A0xd460158efae4fa52!2sThe%20King&#39;s%20Barber%20Shop!5e0!3m2!1ses-419!2smx!4v1680233507845!5m2!1ses-419!2smx"
];

self.addEventListener("install", (e) => {
    console.log("entrando a instalar");
    const cacheStatic = caches
                        .open(STATIC_CACHE)
                        .then((cache) => cache.addAll(APP_SHELL));

    e.waitUntil(cacheStatic);
});

self.addEventListener("fetch", (e)=>{
    console.log("fectch!", e.request);

    e.respondWith(
        caches
                .match(e.request)
                .then(res => res || fetch(e.request))
                .catch(console.log)
    );
});