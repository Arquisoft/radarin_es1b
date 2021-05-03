package computerdatabase

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class TestEnviarSolicitud extends Simulation {

	val httpProtocol = http
		.baseUrl("https://radarines1brestapi.herokuapp.com")
		.inferHtmlResources()
		.acceptHeader("*/*")
		.userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:76.0) Gecko/20100101 Firefox/76.0")

	val headers_0 = Map(
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3",
		"Content-Type" -> "application/json",
		"Origin" -> "http://radarines1bwebapp.herokuapp.com")

	val headers_2 = Map(
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3",
		"Access-Control-Request-Headers" -> "content-type",
		"Access-Control-Request-Method" -> "POST",
		"Origin" -> "http://radarines1bwebapp.herokuapp.com")

	val headers_26 = Map(
		"Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
		"Accept-Encoding" -> "gzip, deflate",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3",
		"Cache-Control" -> "max-age=0",
		"If-Modified-Since" -> "Sun, 02 May 2021 20:31:47 GMT",
		"If-None-Match" -> """W/"cde-1792ec7a738"""",
		"Upgrade-Insecure-Requests" -> "1")

	val headers_27 = Map(
		"Accept" -> "text/css,*/*;q=0.1",
		"Accept-Encoding" -> "gzip, deflate",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3",
		"Cache-Control" -> "max-age=0",
		"If-Modified-Since" -> "Sun, 02 May 2021 20:31:47 GMT",
		"If-None-Match" -> """W/"25408-1792ec7a738"""")

	val headers_28 = Map(
		"Accept" -> "text/css,*/*;q=0.1",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3",
		"Cache-Control" -> "max-age=0",
		"If-Modified-Since" -> "Sat, 26 Oct 1985 08:15:00 GMT",
		"If-None-Match" -> """W/"37c0-cW5oWHzFcgrzuKuBtMixbfPjmt4"""",
		"Origin" -> "http://radarines1bwebapp.herokuapp.com")

	val headers_29 = Map(
		"Accept-Encoding" -> "gzip, deflate",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3",
		"Cache-Control" -> "max-age=0",
		"If-Modified-Since" -> "Sun, 02 May 2021 20:31:47 GMT",
		"If-None-Match" -> """W/"17732-1792ec7a738"""")

	val headers_30 = Map(
		"Accept-Encoding" -> "gzip, deflate",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3",
		"Cache-Control" -> "max-age=0",
		"If-Modified-Since" -> "Sun, 02 May 2021 20:31:47 GMT",
		"If-None-Match" -> """W/"29775a-1792ec7a738"""")

	val headers_31 = Map(
		"Accept" -> "text/css,*/*;q=0.1",
		"Accept-Encoding" -> "gzip, deflate",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3",
		"Cache-Control" -> "max-age=0",
		"If-Modified-Since" -> "Sun, 02 May 2021 20:31:47 GMT",
		"If-None-Match" -> """W/"998-1792ec7a738"""")

	val headers_32 = Map(
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3",
		"Access-Control-Request-Headers" -> "content-type",
		"Access-Control-Request-Method" -> "POST",
		"Cache-Control" -> "max-age=0",
		"Origin" -> "http://radarines1bwebapp.herokuapp.com")

	val headers_34 = Map(
		"Accept" -> "image/webp,*/*",
		"Accept-Encoding" -> "gzip, deflate",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3",
		"Cache-Control" -> "max-age=0",
		"If-Modified-Since" -> "Sun, 02 May 2021 20:30:18 GMT",
		"If-None-Match" -> """W/"3f15-1792ec64b90"""")

	val headers_41 = Map(
		"Accept" -> "image/webp,*/*",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3",
		"Cache-Control" -> "max-age=0")

	val headers_42 = Map(
		"Accept" -> "application/n-quads,application/trig;q=0.95,application/ld+json;q=0.9,application/n-triples;q=0.8,*/*;q=0.1",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3",
		"Cache-Control" -> "max-age=0",
		"Origin" -> "http://radarines1bwebapp.herokuapp.com")

	val headers_67 = Map(
		"Accept" -> "application/n-quads,application/trig;q=0.95,application/ld+json;q=0.9,application/n-triples;q=0.8,*/*;q=0.1",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3",
		"Origin" -> "http://radarines1bwebapp.herokuapp.com")

	val headers_68 = Map(
		"Proxy-Connection" -> "Keep-Alive",
		"User-Agent" -> "TMUFE",
		"X-TM-UF-INFO" -> "440/Uj3tcG7ArMEBOMJxxnpNECS-t-gCit1JlmZj4jges7FdsJPPWiaMC7Frn0gbXWW2ZkJOVLwXnn0fQbdRfDO1jd2dqfNcQP0j9OSlo6XEfl-CtEB9zcg5ZHetQcxXx14cjP3laSf0ookv0hOza0RqdOgebkJ49-PrJ7hll0SOh6_bxVTpe0dllpJytQpUpCk6othXrlp8y_lcMc6dO5GMMFnu906olEDSassPEu6dm7jVYVvJjvDHGor4CNAu4veoX_mK7u0eMBWCNm6hGoQpmmtLOrEaeP4gGbveHuCmGi5nlaaJuCXENNiRduWO4_qCi7ueG_C2GCV2G3C6TKJwkhuEWayp3jv8oAx3MDPJQMDp1xCQaoQ5ujaGdnKpZM_od7fHaCDHMySLggdxBSrzooOmgO-kvbymk1XyrtJQuNKZQgNgTBWAwQ==")

	val headers_111 = Map(
		"Accept" -> "image/webp,*/*",
		"Accept-Encoding" -> "gzip, deflate",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3",
		"Cache-Control" -> "max-age=0",
		"If-Modified-Since" -> "Sun, 02 May 2021 20:30:18 GMT",
		"If-None-Match" -> """W/"47b1-1792ec64b90"""")

    val uri01 = "https://uo270162.inrupt.net/profile/card"
    val uri02 = "http://radarines1bwebapp.herokuapp.com"
    val uri03 = "https://uo247134.solidcommunity.net/profile"
    val uri04 = "https://uo271612.solidcommunity.net/profile"
    val uri05 = "https://uo271397.inrupt.net/profile"
    val uri06 = "https://manuel-arroyo.inrupt.net/profile/card"
    val uri07 = "https://irenecr2.solidcommunity.net/profile/card"
    val uri08 = "https://solid.mit.edu/assets/img/solid-logo.svg"
    val uri09 = "https://alexambi.inrupt.net/profile/card"
    val uri10 = "https://uo269450.solidcommunity.net/profile"
    val uri11 = "https://uo265336.inrupt.net/profile"
    val uri13 = "https://asw2021es1b.solidcommunity.net/profile"
    val uri14 = "https://victoriaalvarez.solidcommunity.net/profile"
    val uri15 = "https://uo257351.inrupt.net/profile/card"
    val uri16 = "https://uo269948.inrupt.net/profile/card"
    val uri17 = "https://javigrao.solidcommunity.net/profile"
    val uri18 = "https://manuelarroyo.inrupt.net/profile"
    val uri19 = "https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
    val uri20 = "https://elpaco.inrupt.net/profile"
    val uri21 = "https://albertofreije.solidcommunity.net/profile"
    val uri22 = "https://uo271288.solidcommunity.net/profile"
    val uri23 = "https://uo225211.solidcommunity.net/profile"
    val uri24 = "https://lucialvareezz.solidcommunity.net/profile"
    val uri25 = "https://antsuarz.solidcommunity.net/profile/card"
    val uri26 = "http://titanium17-0-es.url.trendmicro.com/T/128"
    val uri27 = "https://ismaelsolid.solidcommunity.net/profile"
    val uri28 = "https://alexambi.solidcommunity.net/profile/card"
    val uri29 = "https://usuarioprueba.solidcommunity.net/profile/card"

	val scn = scenario("TestEnviarSolicitud")
		.exec(http("TestEnviarSolicitud_0")
			.post("/api/friends/list/pending")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0000_request.json"))
			.resources(http("TestEnviarSolicitud_1")
			.post("/api/friends/list/pending")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0001_request.json")),
            http("TestEnviarSolicitud_2")
			.options("/api/friends/list/pending")
			.headers(headers_2),
            http("TestEnviarSolicitud_3")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0003_request.json")),
            http("TestEnviarSolicitud_4")
			.options("/api/friends/findNearest")
			.headers(headers_2),
            http("TestEnviarSolicitud_5")
			.options("/api/friends/findNearest")
			.headers(headers_2),
            http("TestEnviarSolicitud_6")
			.post("/api/friends/list/pending")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0006_request.json")),
            http("TestEnviarSolicitud_7")
			.post("/api/friends/findNearest")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0007_request.json")),
            http("TestEnviarSolicitud_8")
			.post("/api/friends/findNearest")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0008_request.json")),
            http("TestEnviarSolicitud_9")
			.post("/api/friends/list/pending")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0009_request.json")),
            http("TestEnviarSolicitud_10")
			.post("/api/friends/list/pending")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0010_request.json")),
            http("TestEnviarSolicitud_11")
			.options("/api/friends/findNearest")
			.headers(headers_2),
            http("TestEnviarSolicitud_12")
			.options("/api/friends/findNearest")
			.headers(headers_2),
            http("TestEnviarSolicitud_13")
			.options("/api/friends/findNearest")
			.headers(headers_2),
            http("TestEnviarSolicitud_14")
			.post("/api/friends/list/pending")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0014_request.json")),
            http("TestEnviarSolicitud_15")
			.post("/api/friends/findNearest")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0015_request.json")),
            http("TestEnviarSolicitud_16")
			.post("/api/friends/findNearest")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0016_request.json")),
            http("TestEnviarSolicitud_17")
			.post("/api/friends/findNearest")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0017_request.json")),
            http("TestEnviarSolicitud_18")
			.post("/api/friends/list/pending")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0018_request.json")),
            http("TestEnviarSolicitud_19")
			.post("/api/friends/list/pending")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0019_request.json")),
            http("TestEnviarSolicitud_20")
			.post("/api/friends/list/pending")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0020_request.json")),
            http("TestEnviarSolicitud_21")
			.post("/api/friends/list/pending")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0021_request.json")),
            http("TestEnviarSolicitud_22")
			.post("/api/friends/list/pending")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0022_request.json")),
            http("TestEnviarSolicitud_23")
			.post("/api/friends/list/pending")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0023_request.json")),
            http("TestEnviarSolicitud_24")
			.post("/api/friends/list/pending")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0024_request.json")),
            http("TestEnviarSolicitud_25")
			.post("/api/friends/list/pending")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0025_request.json"))))
		.pause(1)
		.exec(http("TestEnviarSolicitud_26")
			.get(uri02 + "/")
			.headers(headers_26)
			.resources(http("TestEnviarSolicitud_27")
			.get(uri02 + "/static/css/2.389a9205.chunk.css")
			.headers(headers_27),
            http("TestEnviarSolicitud_28")
			.get(uri19)
			.headers(headers_28),
            http("TestEnviarSolicitud_29")
			.get(uri02 + "/static/js/main.a024c0c2.chunk.js")
			.headers(headers_29),
            http("TestEnviarSolicitud_30")
			.get(uri02 + "/static/js/2.b78d55c7.chunk.js")
			.headers(headers_30),
            http("TestEnviarSolicitud_31")
			.get(uri02 + "/static/css/main.a1030e10.chunk.css")
			.headers(headers_31),
            http("TestEnviarSolicitud_32")
			.options("/api/users/search/admin")
			.headers(headers_32),
            http("TestEnviarSolicitud_33")
			.options("/api/users/search/ban")
			.headers(headers_32),
            http("TestEnviarSolicitud_34")
			.get(uri02 + "/noti.png")
			.headers(headers_34),
            http("TestEnviarSolicitud_35")
			.options("/api/users/lastTime/update")
			.headers(headers_32),
            http("TestEnviarSolicitud_36")
			.options("/api/users/status/update")
			.headers(headers_32),
            http("TestEnviarSolicitud_37")
			.post("/api/users/search/admin")
			.headers(headers_0),
            http("TestEnviarSolicitud_38")
			.post("/api/users/search/ban")
			.headers(headers_0),
            http("TestEnviarSolicitud_39")
			.post("/api/users/status/update")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0039_request.json")),
            http("TestEnviarSolicitud_40")
			.post("/api/users/lastTime/update")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0040_request.json")),
            http("TestEnviarSolicitud_41")
			.get(uri08)
			.headers(headers_41),
            http("TestEnviarSolicitud_42")
			.get(uri22 + "/card")
			.headers(headers_42),
            http("TestEnviarSolicitud_43")
			.options("/api/users/add")
			.headers(headers_2),
            http("TestEnviarSolicitud_44")
			.post("/api/users/add")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0044_request.json")),
            http("TestEnviarSolicitud_45")
			.get(uri22 + "/image_0.png")
			.headers(headers_41),
            http("TestEnviarSolicitud_46")
			.options("/api/friends/list/pending")
			.headers(headers_2),
            http("TestEnviarSolicitud_47")
			.options("/api/friends/list/pending")
			.headers(headers_2),
            http("TestEnviarSolicitud_48")
			.post("/api/friends/list/pending")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0048_request.json")),
            http("TestEnviarSolicitud_49")
			.post("/api/users/lastTime/update")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0049_request.json")),
            http("TestEnviarSolicitud_50")
			.post("/api/friends/list/pending")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0050_request.json")),
            http("TestEnviarSolicitud_51")
			.post("/api/friends/list/pending")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0051_request.json")),
            http("TestEnviarSolicitud_52")
			.post("/api/friends/list/pending")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0052_request.json")),
            http("TestEnviarSolicitud_53")
			.post("/api/friends/list/pending")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0053_request.json")),
            http("TestEnviarSolicitud_54")
			.post("/api/friends/list/pending")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0054_request.json")),
            http("TestEnviarSolicitud_55")
			.post("/api/friends/list/pending")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0055_request.json")),
            http("TestEnviarSolicitud_56")
			.post("/api/friends/list/pending")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0056_request.json")),
            http("TestEnviarSolicitud_57")
			.post("/api/friends/list/pending")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0057_request.json")),
            http("TestEnviarSolicitud_58")
			.post("/api/friends/list/pending")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0058_request.json")),
            http("TestEnviarSolicitud_59")
			.post("/api/friends/list/pending")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0059_request.json")),
            http("TestEnviarSolicitud_60")
			.post("/api/friends/list/pending")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0060_request.json")),
            http("TestEnviarSolicitud_61")
			.post("/api/friends/list/pending")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0061_request.json")),
            http("TestEnviarSolicitud_62")
			.post("/api/friends/list/pending")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0062_request.json")),
            http("TestEnviarSolicitud_63")
			.post("/api/friends/list/pending")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0063_request.json")),
            http("TestEnviarSolicitud_64")
			.post("/api/friends/list/pending")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0064_request.json")),
            http("TestEnviarSolicitud_65")
			.options("/api/users/search/name")
			.headers(headers_2),
            http("TestEnviarSolicitud_66")
			.post("/api/users/search/name")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0066_request.json")),
            http("TestEnviarSolicitud_67")
			.get(uri23 + "/card")
			.headers(headers_67),
            http("TestEnviarSolicitud_68")
			.get("http://titanium17-0-es.url.trendmicro.com:80/T/128/RXh30UY_K0DQUekMOrfu_w2st-yW9bPOHxDopWJq3fTtaQucYa0RpPS4p4xgfeqLTlnORzMPfFnx9w0E92e-GNUr3mSzoPDhTeVoLrl5IwKiWsW4otuKE-Epzt2sE1eB")
			.headers(headers_68),
            http("TestEnviarSolicitud_69")
			.get(uri05 + "/card")
			.headers(headers_67),
            http("TestEnviarSolicitud_70")
			.get("http://titanium17-0-es.url.trendmicro.com:80/T/128/RXh30UY_K0DQUekMOrfu_w2st-yW9bPOHxDopWJq3fSgCwoTflqPzbG7jI4F_DthhOkA9oLd457tBatRl0JqrbCbRrrt32PSVTODaCTE7mD-4e52ivQyL2M4Ie7jj-DP")
			.headers(headers_68),
            http("TestEnviarSolicitud_71")
			.get("http://titanium17-0-es.url.trendmicro.com:80/T/128/RXh30UY_K0DQUekMOrfu_w2st-yW9bPOHxDopWJq3fR07csThMZOj6-nFId50W97nVMqXBHsK7uphllI94vJ1rCo2WTcAWy3YP55eXEWo4UQMl_0TzLZ_i9Qm22RxGok")
			.headers(headers_68),
            http("TestEnviarSolicitud_72")
			.get("http://titanium17-0-es.url.trendmicro.com:80/T/128/RXh30UY_K0DQUekMOrfu_w2st-yW9bPOHxDopWJq3fTfOiubrm27PHS_0ndW4UYQ9x6LiKgfAPT03CaA6Qx_xttYjwDLdbfkH4Io35-x32fRv_2I-h5TMjbgI6GI_FmA")
			.headers(headers_68),
            http("TestEnviarSolicitud_73")
			.get(uri01)
			.headers(headers_67),
            http("TestEnviarSolicitud_74")
			.get(uri03 + "/card")
			.headers(headers_67),
            http("TestEnviarSolicitud_75")
			.get("http://titanium17-0-es.url.trendmicro.com:80/T/128/RXh30UY_K0DQUekMOrfu_w2st-yW9bPOHxDopWJq3fTEB7x0Zk4CTqVr_ZLgqSfh-HZ0Zn8wA_2iwC9R1kLlLG5F3VUJcQ0uQc6nCuUl9Pi0dZMCi4B_5uuDi4ptp455")
			.headers(headers_68),
            http("TestEnviarSolicitud_76")
			.get("http://titanium17-0-es.url.trendmicro.com:80/T/128/RXh30UY_K0DQUekMOrfu_w2st-yW9bPOHxDopWJq3fRtN0ecKdKlaYa_xPrzvirfUQyOyG7d8Us6BGFviIb6SbiAy_qo0ocnz47_0NlcUCeK76z0rMXyqbvDsGNrOlkF")
			.headers(headers_68),
            http("TestEnviarSolicitud_77")
			.get(uri27 + "/card")
			.headers(headers_67),
            http("TestEnviarSolicitud_78")
			.get("http://titanium17-0-es.url.trendmicro.com:80/T/128/RXh30UY_K0DQUekMOrfu_w2st-yW9bPOHxDopWJq3fQfrrnmM3VCwzqZAv5CmEbv_SjJtZUZj0_AR_INs85Sif-JXseBQP0t9V1ubtMlr43qeNcT_Du5lyjHsN-r-EnG")
			.headers(headers_68),
            http("TestEnviarSolicitud_79")
			.get(uri16)
			.headers(headers_67),
            http("TestEnviarSolicitud_80")
			.get(uri09)
			.headers(headers_67),
            http("TestEnviarSolicitud_81")
			.get("http://titanium17-0-es.url.trendmicro.com:80/T/128/RXh30UY_K0DQUekMOrfu_w2st-yW9bPOHxDopWJq3fT5nIzeH0tyEYwJ-wfPv8vVPwRvTiBHaK5IlQt4mCEweA4-Zjhqq15HVqOVVafbHXmHtcIraRm5u3fMeApFTJey")
			.headers(headers_68),
            http("TestEnviarSolicitud_82")
			.get(uri11 + "/card")
			.headers(headers_67),
            http("TestEnviarSolicitud_83")
			.get(uri06)
			.headers(headers_67),
            http("TestEnviarSolicitud_84")
			.get(uri18 + "/card")
			.headers(headers_67),
            http("TestEnviarSolicitud_85")
			.get(uri05 + "/portada8_1618229171000_.png")
			.headers(headers_41),
            http("TestEnviarSolicitud_86")
			.get(uri13 + "/card")
			.headers(headers_67),
            http("TestEnviarSolicitud_87")
			.get(uri10 + "/card")
			.headers(headers_67),
            http("TestEnviarSolicitud_88")
			.get(uri21 + "/card")
			.headers(headers_67),
            http("TestEnviarSolicitud_89")
			.get(uri04 + "/card")
			.headers(headers_67),
            http("TestEnviarSolicitud_90")
			.get(uri17 + "/card")
			.headers(headers_67),
            http("TestEnviarSolicitud_91")
			.get(uri15)
			.headers(headers_67),
            http("TestEnviarSolicitud_92")
			.get(uri20 + "/card")
			.headers(headers_67),
            http("TestEnviarSolicitud_93")
			.get(uri23 + "/11.jpg")
			.headers(headers_41),
            http("TestEnviarSolicitud_94")
			.get(uri18 + "/WhatsApp%20Image%202020-03-28%20at%2016.20.56.jpeg")
			.headers(headers_41),
            http("TestEnviarSolicitud_95")
			.get(uri20 + "/1604007537478%5B1%5D.jpg")
			.headers(headers_41),
            http("TestEnviarSolicitud_96")
			.options("/api/friends/list")
			.headers(headers_2),
            http("TestEnviarSolicitud_97")
			.get(uri11 + "/img-was%20(2).jpg")
			.headers(headers_41),
            http("TestEnviarSolicitud_98")
			.post("/api/friends/list/pending")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0098_request.json")),
            http("TestEnviarSolicitud_99")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0099_request.json")),
            http("TestEnviarSolicitud_100")
			.options("/api/friends/findNearest")
			.headers(headers_2),
            http("TestEnviarSolicitud_101")
			.options("/api/friends/findNearest")
			.headers(headers_2),
            http("TestEnviarSolicitud_102")
			.options("/api/friends/findNearest")
			.headers(headers_2),
            http("TestEnviarSolicitud_103")
			.options("/api/friends/findNearest")
			.headers(headers_2),
            http("TestEnviarSolicitud_104")
			.options("/api/friends/findNearest")
			.headers(headers_2),
            http("TestEnviarSolicitud_105")
			.post("/api/friends/findNearest")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0105_request.json")),
            http("TestEnviarSolicitud_106")
			.post("/api/friends/findNearest")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0106_request.json")),
            http("TestEnviarSolicitud_107")
			.post("/api/friends/findNearest")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0107_request.json")),
            http("TestEnviarSolicitud_108")
			.post("/api/friends/findNearest")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0108_request.json")),
            http("TestEnviarSolicitud_109")
			.post("/api/friends/findNearest")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0109_request.json")),
            http("TestEnviarSolicitud_110")
			.options("/api/friends/findNearest")
			.headers(headers_2),
            http("TestEnviarSolicitud_111")
			.get(uri02 + "/notified.png")
			.headers(headers_111),
            http("TestEnviarSolicitud_112")
			.post("/api/friends/findNearest")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0112_request.json")),
            http("TestEnviarSolicitud_113")
			.get(uri25)
			.headers(headers_67),
            http("TestEnviarSolicitud_114")
			.get(uri24 + "/card")
			.headers(headers_67),
            http("TestEnviarSolicitud_115")
			.get(uri07)
			.headers(headers_67),
            http("TestEnviarSolicitud_116")
			.get(uri28)
			.headers(headers_67),
            http("TestEnviarSolicitud_117")
			.get(uri14 + "/card")
			.headers(headers_67),
            http("TestEnviarSolicitud_118")
			.get(uri27 + "/mlg_dog02.png")
			.headers(headers_41),
            http("TestEnviarSolicitud_119")
			.get(uri13 + "/pp.jfif_.jpeg")
			.headers(headers_41),
            http("TestEnviarSolicitud_120")
			.get(uri17 + "/descarga.jpg")
			.headers(headers_41),
            http("TestEnviarSolicitud_121")
			.get(uri04 + "/avatar.jpg")
			.headers(headers_41),
            http("TestEnviarSolicitud_122")
			.get(uri10 + "/IMG_20210405_230807_141.jpg")
			.headers(headers_41),
            http("TestEnviarSolicitud_123")
			.get(uri21 + "/d06ebd1d52dd9110ac7d2944b7fe403d.png")
			.headers(headers_41),
            http("TestEnviarSolicitud_124")
			.get(uri14 + "/foto%20copy.png")
			.headers(headers_41),
            http("TestEnviarSolicitud_125")
			.get(uri24 + "/601A725E-7728-440D-9106-2816FA008921.jpeg")
			.headers(headers_41),
            http("TestEnviarSolicitud_126")
			.get(uri03 + "/DSC100444071.jpg")
			.headers(headers_41)))
		.pause(3)
		.exec(http("TestEnviarSolicitud_127")
			.options("/api/friends/list")
			.headers(headers_2)
			.resources(http("TestEnviarSolicitud_128")
			.options("/api/friends/list/pending")
			.headers(headers_2),
            http("TestEnviarSolicitud_129")
			.post("/api/friends/list/pending")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0129_request.json")),
            http("TestEnviarSolicitud_130")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0130_request.json")),
            http("TestEnviarSolicitud_131")
			.options("/api/friends/findNearest")
			.headers(headers_2),
            http("TestEnviarSolicitud_132")
			.options("/api/friends/findNearest")
			.headers(headers_2),
            http("TestEnviarSolicitud_133")
			.options("/api/friends/findNearest")
			.headers(headers_2),
            http("TestEnviarSolicitud_134")
			.options("/api/friends/findNearest")
			.headers(headers_2),
            http("TestEnviarSolicitud_135")
			.options("/api/friends/findNearest")
			.headers(headers_2),
            http("TestEnviarSolicitud_136")
			.post("/api/friends/findNearest")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0136_request.json")),
            http("TestEnviarSolicitud_137")
			.post("/api/friends/findNearest")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0137_request.json")),
            http("TestEnviarSolicitud_138")
			.post("/api/friends/findNearest")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0138_request.json")),
            http("TestEnviarSolicitud_139")
			.post("/api/friends/findNearest")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0139_request.json")),
            http("TestEnviarSolicitud_140")
			.post("/api/friends/findNearest")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0140_request.json"))))
		.pause(4)
		.exec(http("TestEnviarSolicitud_141")
			.options("/api/users/lastTime/update")
			.headers(headers_2)
			.resources(http("TestEnviarSolicitud_142")
			.options("/api/users/lastTime/update")
			.headers(headers_2),
            http("TestEnviarSolicitud_143")
			.options("/api/users/lastTime/update")
			.headers(headers_2),
            http("TestEnviarSolicitud_144")
			.post("/api/users/lastTime/update")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0144_request.json")),
            http("TestEnviarSolicitud_145")
			.post("/api/users/lastTime/update")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0145_request.json")),
            http("TestEnviarSolicitud_146")
			.post("/api/users/lastTime/update")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0146_request.json")),
            http("TestEnviarSolicitud_147")
			.post("/api/users/lastTime/update")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0147_request.json")),
            http("TestEnviarSolicitud_148")
			.post("/api/users/lastTime/update")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0148_request.json")),
            http("TestEnviarSolicitud_149")
			.post("/api/users/lastTime/update")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0149_request.json")),
            http("TestEnviarSolicitud_150")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0150_request.json")),
            http("TestEnviarSolicitud_151")
			.post("/api/users/lastTime/update")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0151_request.json")),
            http("TestEnviarSolicitud_152")
			.post("/api/users/lastTime/update")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0152_request.json")),
            http("TestEnviarSolicitud_153")
			.post("/api/users/lastTime/update")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0153_request.json")),
            http("TestEnviarSolicitud_154")
			.post("/api/users/lastTime/update")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0154_request.json")),
            http("TestEnviarSolicitud_155")
			.post("/api/users/lastTime/update")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0155_request.json")),
            http("TestEnviarSolicitud_156")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0156_request.json")),
            http("TestEnviarSolicitud_157")
			.options("/api/friends/check")
			.headers(headers_2),
            http("TestEnviarSolicitud_158")
			.post("/api/friends/list/pending")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0158_request.json")),
            http("TestEnviarSolicitud_159")
			.options("/api/friends/list")
			.headers(headers_2),
            http("TestEnviarSolicitud_160")
			.options("/api/friends/check")
			.headers(headers_2),
            http("TestEnviarSolicitud_161")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0161_request.json")),
            http("TestEnviarSolicitud_162")
			.post("/api/friends/check")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0162_request.json")),
            http("TestEnviarSolicitud_163")
			.post("/api/friends/check")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0163_request.json")),
            http("TestEnviarSolicitud_164")
			.post("/api/friends/findNearest")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0164_request.json")),
            http("TestEnviarSolicitud_165")
			.post("/api/friends/findNearest")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0165_request.json")),
            http("TestEnviarSolicitud_166")
			.post("/api/friends/findNearest")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0166_request.json")),
            http("TestEnviarSolicitud_167")
			.post("/api/friends/findNearest")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0167_request.json")),
            http("TestEnviarSolicitud_168")
			.post("/api/friends/findNearest")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0168_request.json")),
            http("TestEnviarSolicitud_169")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0169_request.json")),
            http("TestEnviarSolicitud_170")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0170_request.json")),
            http("TestEnviarSolicitud_171")
			.get(uri29)
			.headers(headers_67),
            http("TestEnviarSolicitud_172")
			.get("http://titanium17-0-es.url.trendmicro.com:80/T/128/RXh30UY_K0DQUekMOrfu_w2st-yW9bPOHxDopWJq3fSCPolx8T_sVrLC9tndVbWWWzXT2kdF6m0XJBIlwjBoYEFLlZ6lJPoWFF478zpu-IMFXqmlFpwzcC9PD73V28oR")
			.headers(headers_68),
            http("TestEnviarSolicitud_173")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0173_request.json")),
            http("TestEnviarSolicitud_174")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0174_request.json")),
            http("TestEnviarSolicitud_175")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0175_request.json")),
            http("TestEnviarSolicitud_176")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0176_request.json")),
            http("TestEnviarSolicitud_177")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0177_request.json")),
            http("TestEnviarSolicitud_178")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0178_request.json")),
            http("TestEnviarSolicitud_179")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0179_request.json")),
            http("TestEnviarSolicitud_180")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0180_request.json")),
            http("TestEnviarSolicitud_181")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0181_request.json")),
            http("TestEnviarSolicitud_182")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0182_request.json")),
            http("TestEnviarSolicitud_183")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0183_request.json")),
            http("TestEnviarSolicitud_184")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0184_request.json")),
            http("TestEnviarSolicitud_185")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0185_request.json")),
            http("TestEnviarSolicitud_186")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0186_request.json")),
            http("TestEnviarSolicitud_187")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0187_request.json")),
            http("TestEnviarSolicitud_188")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0188_request.json")),
            http("TestEnviarSolicitud_189")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0189_request.json")),
            http("TestEnviarSolicitud_190")
			.post("/api/friends/check")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0190_request.json")),
            http("TestEnviarSolicitud_191")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0191_request.json")),
            http("TestEnviarSolicitud_192")
			.options("/api/friends/add")
			.headers(headers_2),
            http("TestEnviarSolicitud_193")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0193_request.json")),
            http("TestEnviarSolicitud_194")
			.post("/api/friends/add")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0194_request.json")),
            http("TestEnviarSolicitud_195")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0195_request.json")),
            http("TestEnviarSolicitud_196")
			.post("/api/friends/check")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0196_request.json")),
            http("TestEnviarSolicitud_197")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0197_request.json")),
            http("TestEnviarSolicitud_198")
			.get("http://titanium17-0-es.url.trendmicro.com:80/T/128/RXh30UY_K0DQUekMOrfu_xk4CqzKx4-SXIN_XrtC4vuAaQqOwEzit2qWM7ZvWi26RWRom6pGA_io9I0LXuEwZXC1xFDDEhtfetd2yy56ELdHV2Vu4fik1x3xxyHL-6dL")
			.headers(headers_68),
            http("TestEnviarSolicitud_199")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0199_request.json")),
            http("TestEnviarSolicitud_200")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0200_request.json")),
            http("TestEnviarSolicitud_201")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0201_request.json")),
            http("TestEnviarSolicitud_202")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0202_request.json")),
            http("TestEnviarSolicitud_203")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0203_request.json")),
            http("TestEnviarSolicitud_204")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0204_request.json")),
            http("TestEnviarSolicitud_205")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0205_request.json")),
            http("TestEnviarSolicitud_206")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0206_request.json")),
            http("TestEnviarSolicitud_207")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0207_request.json")),
            http("TestEnviarSolicitud_208")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0208_request.json")),
            http("TestEnviarSolicitud_209")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0209_request.json")),
            http("TestEnviarSolicitud_210")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0210_request.json")),
            http("TestEnviarSolicitud_211")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0211_request.json")),
            http("TestEnviarSolicitud_212")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0212_request.json")),
            http("TestEnviarSolicitud_213")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0213_request.json")),
            http("TestEnviarSolicitud_214")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0214_request.json")),
            http("TestEnviarSolicitud_215")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0215_request.json")),
            http("TestEnviarSolicitud_216")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0216_request.json")),
            http("TestEnviarSolicitud_217")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0217_request.json")),
            http("TestEnviarSolicitud_218")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0218_request.json")),
            http("TestEnviarSolicitud_219")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0219_request.json")),
            http("TestEnviarSolicitud_220")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0220_request.json")),
            http("TestEnviarSolicitud_221")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0221_request.json")),
            http("TestEnviarSolicitud_222")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0222_request.json")),
            http("TestEnviarSolicitud_223")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0223_request.json")),
            http("TestEnviarSolicitud_224")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0224_request.json")),
            http("TestEnviarSolicitud_225")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0225_request.json")),
            http("TestEnviarSolicitud_226")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0226_request.json")),
            http("TestEnviarSolicitud_227")
			.options("/api/friends/list/pending")
			.headers(headers_2),
            http("TestEnviarSolicitud_228")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0228_request.json")),
            http("TestEnviarSolicitud_229")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0229_request.json")),
            http("TestEnviarSolicitud_230")
			.post("/api/friends/list/pending")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0230_request.json")),
            http("TestEnviarSolicitud_231")
			.options("/api/friends/findNearest")
			.headers(headers_2),
            http("TestEnviarSolicitud_232")
			.options("/api/friends/findNearest")
			.headers(headers_2),
            http("TestEnviarSolicitud_233")
			.options("/api/friends/findNearest")
			.headers(headers_2),
            http("TestEnviarSolicitud_234")
			.options("/api/friends/findNearest")
			.headers(headers_2),
            http("TestEnviarSolicitud_235")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0235_request.json")),
            http("TestEnviarSolicitud_236")
			.options("/api/friends/findNearest")
			.headers(headers_2),
            http("TestEnviarSolicitud_237")
			.options("/api/friends/list")
			.headers(headers_2),
            http("TestEnviarSolicitud_238")
			.post("/api/friends/findNearest")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0238_request.json")),
            http("TestEnviarSolicitud_239")
			.post("/api/friends/findNearest")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0239_request.json")),
            http("TestEnviarSolicitud_240")
			.post("/api/friends/findNearest")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0240_request.json")),
            http("TestEnviarSolicitud_241")
			.post("/api/friends/findNearest")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0241_request.json")),
            http("TestEnviarSolicitud_242")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0242_request.json")),
            http("TestEnviarSolicitud_243")
			.post("/api/friends/findNearest")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0243_request.json")),
            http("TestEnviarSolicitud_244")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0244_request.json")),
            http("TestEnviarSolicitud_245")
			.post("/api/friends/list")
			.headers(headers_0)
			.body(RawFileBody("computerdatabase/testenviarsolicitud/0245_request.json"))))

	setUp(scn.inject(rampUsers(50) during(60 seconds))).protocols(httpProtocol)
}