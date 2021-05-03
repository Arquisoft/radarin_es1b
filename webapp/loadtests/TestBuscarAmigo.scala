package computerdatabase

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class TestBuscarAmigo extends Simulation {

	val httpProtocol = http
		.baseUrl("https://radarines1brestapi.herokuapp.com")
		.inferHtmlResources()
		.acceptHeader("*/*")
		.userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:76.0) Gecko/20100101 Firefox/76.0")

	val headers_0 = Map(
		"Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
		"Accept-Encoding" -> "gzip, deflate",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3",
		"Cache-Control" -> "max-age=0",
		"If-Modified-Since" -> "Sun, 02 May 2021 20:31:47 GMT",
		"If-None-Match" -> """W/"cde-1792ec7a738"""",
		"Upgrade-Insecure-Requests" -> "1")

	val headers_1 = Map(
		"Accept" -> "text/css,*/*;q=0.1",
		"Accept-Encoding" -> "gzip, deflate",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3",
		"Cache-Control" -> "max-age=0",
		"If-Modified-Since" -> "Sun, 02 May 2021 20:31:47 GMT",
		"If-None-Match" -> """W/"25408-1792ec7a738"""")

	val headers_2 = Map(
		"Accept" -> "text/css,*/*;q=0.1",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3",
		"Cache-Control" -> "max-age=0",
		"If-Modified-Since" -> "Sat, 26 Oct 1985 08:15:00 GMT",
		"If-None-Match" -> """W/"37c0-cW5oWHzFcgrzuKuBtMixbfPjmt4"""",
		"Origin" -> "http://radarines1bwebapp.herokuapp.com")

	val headers_3 = Map(
		"Accept" -> "text/css,*/*;q=0.1",
		"Accept-Encoding" -> "gzip, deflate",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3",
		"Cache-Control" -> "max-age=0",
		"If-Modified-Since" -> "Sun, 02 May 2021 20:31:47 GMT",
		"If-None-Match" -> """W/"998-1792ec7a738"""")

	val headers_4 = Map(
		"Accept-Encoding" -> "gzip, deflate",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3",
		"Cache-Control" -> "max-age=0",
		"If-Modified-Since" -> "Sun, 02 May 2021 20:31:47 GMT",
		"If-None-Match" -> """W/"29775a-1792ec7a738"""")

	val headers_5 = Map(
		"Accept-Encoding" -> "gzip, deflate",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3",
		"Cache-Control" -> "max-age=0",
		"If-Modified-Since" -> "Sun, 02 May 2021 20:31:47 GMT",
		"If-None-Match" -> """W/"17732-1792ec7a738"""")

	val headers_6 = Map(
		"Accept" -> "image/webp,*/*",
		"Accept-Encoding" -> "gzip, deflate",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3",
		"Cache-Control" -> "max-age=0",
		"If-Modified-Since" -> "Sun, 02 May 2021 20:30:18 GMT",
		"If-None-Match" -> """W/"3f15-1792ec64b90"""")

	val headers_7 = Map(
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3",
		"Access-Control-Request-Headers" -> "content-type",
		"Access-Control-Request-Method" -> "POST",
		"Cache-Control" -> "max-age=0",
		"Origin" -> "http://radarines1bwebapp.herokuapp.com")

	val headers_11 = Map(
		"Accept" -> "image/webp,*/*",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3",
		"Cache-Control" -> "max-age=0")

	val headers_12 = Map(
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3",
		"Content-Type" -> "application/json",
		"Origin" -> "http://radarines1bwebapp.herokuapp.com")

	val headers_16 = Map(
		"Proxy-Connection" -> "Keep-Alive",
		"User-Agent" -> "TMUFE",
		"X-TM-UF-INFO" -> "440/Uj3tcG7ArMEBOMJxxnpNECS-t-gCit1JlmZj4jges7FdsJPPWiaMC7Frn0gbXWW2ZkJOVLwXnn0fQbdRfDO1jd2dqfNcQP0j9OSlo6XEfl-CtEB9zcg5ZHetQcxXx14cjP3laSf0ookv0hOza0RqdOgebkJ49-PrJ7hll0SOh6_bxVTpe0dllpJytQpUpCk6othXrlp8y_lcMc6dO5GMMFnu906olEDSassPEu6dm7jVYVvJjvDHGor4CNAu4veoX_mK7u0eMBWCNm6hGoQpmmtLOrEaeP4gGbveHuCmGi5nlaaJuCXENNiRduWO4_qCi7ueG_C2GCV2G3C6TKJwkhuEWayp3jv8oAx3MDPJQMDp1xCQaoQ5ujaGdnKpZM_od7fHaCDHMySLggdxBSrzooOmgO-kvbymk1XyrtJQuNKZQgNgTBWAwQ==")

	val headers_17 = Map(
		"Accept" -> "application/n-quads,application/trig;q=0.95,application/ld+json;q=0.9,application/n-triples;q=0.8,*/*;q=0.1",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3",
		"Cache-Control" -> "max-age=0",
		"Origin" -> "http://radarines1bwebapp.herokuapp.com")

	val headers_18 = Map(
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3",
		"Access-Control-Request-Headers" -> "content-type",
		"Access-Control-Request-Method" -> "POST",
		"Origin" -> "http://radarines1bwebapp.herokuapp.com")

	val headers_40 = Map(
		"Accept" -> "application/n-quads,application/trig;q=0.95,application/ld+json;q=0.9,application/n-triples;q=0.8,*/*;q=0.1",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3",
		"Origin" -> "http://radarines1bwebapp.herokuapp.com")

	val headers_69 = Map(
		"Accept" -> "image/webp,*/*",
		"Accept-Encoding" -> "gzip, deflate",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3",
		"Cache-Control" -> "max-age=0",
		"If-Modified-Since" -> "Sun, 02 May 2021 20:30:18 GMT",
		"If-None-Match" -> """W/"47b1-1792ec64b90"""")

	val headers_82 = Map(
		"Accept" -> "image/webp,*/*",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3")

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
    val uri26 = "http://titanium17-0-es.url.trendmicro.com/T"
    val uri27 = "https://ismaelsolid.solidcommunity.net/profile"
    val uri28 = "https://alexambi.solidcommunity.net/profile/card"

	val scn = scenario("TestBuscarAmigo")
		.exec(http("TestBuscarAmigo_0")
			.get(uri02 + "/")
			.headers(headers_0)
			.resources(http("TestBuscarAmigo_1")
			.get(uri02 + "/static/css/2.389a9205.chunk.css")
			.headers(headers_1),
            http("TestBuscarAmigo_2")
			.get(uri19)
			.headers(headers_2),
            http("TestBuscarAmigo_3")
			.get(uri02 + "/static/css/main.a1030e10.chunk.css")
			.headers(headers_3),
            http("TestBuscarAmigo_4")
			.get(uri02 + "/static/js/2.b78d55c7.chunk.js")
			.headers(headers_4),
            http("TestBuscarAmigo_5")
			.get(uri02 + "/static/js/main.a024c0c2.chunk.js")
			.headers(headers_5),
            http("TestBuscarAmigo_6")
			.get(uri02 + "/noti.png")
			.headers(headers_6),
            http("TestBuscarAmigo_7")
			.options("/api/users/lastTime/update")
			.headers(headers_7),
            http("TestBuscarAmigo_8")
			.options("/api/users/search/admin")
			.headers(headers_7),
            http("TestBuscarAmigo_9")
			.options("/api/users/status/update")
			.headers(headers_7),
            http("TestBuscarAmigo_10")
			.options("/api/users/search/ban")
			.headers(headers_7),
            http("TestBuscarAmigo_11")
			.get(uri08)
			.headers(headers_11),
            http("TestBuscarAmigo_12")
			.post("/api/users/search/admin")
			.headers(headers_12),
            http("TestBuscarAmigo_13")
			.post("/api/users/search/ban")
			.headers(headers_12),
            http("TestBuscarAmigo_14")
			.post("/api/users/status/update")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0014_request.json")),
            http("TestBuscarAmigo_15")
			.post("/api/users/lastTime/update")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0015_request.json")),
            http("TestBuscarAmigo_16")
			.get("http://titanium17-0-es.url.trendmicro.com:80/T/128/RXh30UY_K0DQUekMOrfu_w2st-yW9bPOHxDopWJq3fQdj8GBFsguTVEWHROtpAiP7I0gSZ5TikiougascKPkl-tQ5lBhcwKZyC95WqY4oqsUC845RlbLdn8W0KeAL4pR")
			.headers(headers_16),
            http("TestBuscarAmigo_17")
			.get(uri22 + "/card")
			.headers(headers_17),
            http("TestBuscarAmigo_18")
			.options("/api/users/add")
			.headers(headers_18),
            http("TestBuscarAmigo_19")
			.post("/api/users/add")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0019_request.json")),
            http("TestBuscarAmigo_20")
			.get(uri22 + "/image_0.png")
			.headers(headers_11)))
		.pause(1)
		.exec(http("TestBuscarAmigo_21")
			.options("/api/friends/list/pending")
			.headers(headers_18)
			.resources(http("TestBuscarAmigo_22")
			.options("/api/friends/list/pending")
			.headers(headers_18),
            http("TestBuscarAmigo_23")
			.post("/api/users/lastTime/update")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0023_request.json")),
            http("TestBuscarAmigo_24")
			.post("/api/friends/list/pending")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0024_request.json")),
            http("TestBuscarAmigo_25")
			.post("/api/friends/list/pending")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0025_request.json")),
            http("TestBuscarAmigo_26")
			.post("/api/friends/list/pending")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0026_request.json")),
            http("TestBuscarAmigo_27")
			.post("/api/friends/list/pending")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0027_request.json")),
            http("TestBuscarAmigo_28")
			.post("/api/friends/list/pending")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0028_request.json")),
            http("TestBuscarAmigo_29")
			.post("/api/friends/list/pending")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0029_request.json")),
            http("TestBuscarAmigo_30")
			.post("/api/friends/list/pending")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0030_request.json")),
            http("TestBuscarAmigo_31")
			.post("/api/friends/list/pending")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0031_request.json")),
            http("TestBuscarAmigo_32")
			.post("/api/friends/list/pending")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0032_request.json")),
            http("TestBuscarAmigo_33")
			.post("/api/friends/list/pending")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0033_request.json")),
            http("TestBuscarAmigo_34")
			.post("/api/friends/list/pending")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0034_request.json")),
            http("TestBuscarAmigo_35")
			.post("/api/friends/list/pending")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0035_request.json")),
            http("TestBuscarAmigo_36")
			.options("/api/users/search/name")
			.headers(headers_18),
            http("TestBuscarAmigo_37")
			.post("/api/users/search/name")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0037_request.json")),
            http("TestBuscarAmigo_38")
			.get("http://titanium17-0-es.url.trendmicro.com:80/T/152/RXh30UY_K0DQUekMOrfu__XJA21Rue819VbLm34FVGfBv71_NZr4TR0FrjuOkWbO_LNwDA6e2WQL1iknTivP1Omz2Ux6ooP7Tes5L9fkLzdkIshgBWCqBWxhtTq1B972eEIPlcmvuQ0SsROS72-qcg==")
			.headers(headers_16),
            http("TestBuscarAmigo_39")
			.get("http://titanium17-0-es.url.trendmicro.com:80/T/128/RXh30UY_K0DQUekMOrfu_w2st-yW9bPOHxDopWJq3fQ_7LKqm5Yvr3Ew3W7yGsJkHShylVkfsiyHhpw1703dITIYmtd4FPB-IlT78sRJpDwqWVlX-4mwj2oTr2SsTqnQ")
			.headers(headers_16),
            http("TestBuscarAmigo_40")
			.get(uri23 + "/card")
			.headers(headers_40),
            http("TestBuscarAmigo_41")
			.options("/api/friends/list")
			.headers(headers_18),
            http("TestBuscarAmigo_42")
			.post("/api/friends/list/pending")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0042_request.json")),
            http("TestBuscarAmigo_43")
			.post("/api/friends/list")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0043_request.json")),
            http("TestBuscarAmigo_44")
			.get(uri05 + "/card")
			.headers(headers_40),
            http("TestBuscarAmigo_45")
			.get("http://titanium17-0-es.url.trendmicro.com:80/T/128/RXh30UY_K0DQUekMOrfu_w2st-yW9bPOHxDopWJq3fTtaQucYa0RpPS4p4xgfeqLTlnORzMPfFnx9w0E92e-GNUr3mSzoPDhTeVoLrl5IwKiWsW4otuKE-Epzt2sE1eB")
			.headers(headers_16),
            http("TestBuscarAmigo_46")
			.options("/api/friends/findNearest")
			.headers(headers_18),
            http("TestBuscarAmigo_47")
			.options("/api/friends/findNearest")
			.headers(headers_18),
            http("TestBuscarAmigo_48")
			.options("/api/friends/findNearest")
			.headers(headers_18),
            http("TestBuscarAmigo_49")
			.options("/api/friends/findNearest")
			.headers(headers_18),
            http("TestBuscarAmigo_50")
			.post("/api/friends/findNearest")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0050_request.json")),
            http("TestBuscarAmigo_51")
			.post("/api/friends/findNearest")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0051_request.json")),
            http("TestBuscarAmigo_52")
			.post("/api/friends/findNearest")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0052_request.json")),
            http("TestBuscarAmigo_53")
			.get("http://titanium17-0-es.url.trendmicro.com:80/T/128/RXh30UY_K0DQUekMOrfu_w2st-yW9bPOHxDopWJq3fQdj8GBFsguTVEWHROtpAiPhsBz7cB5LdJKSycTI3GEn1G7VUr9zjuiR2fzUnG5sm9LCJlIsyzhuuAuF5U14fdr")
			.headers(headers_16),
            http("TestBuscarAmigo_54")
			.get("http://titanium17-0-es.url.trendmicro.com:80/T/108/RXh30UY_K0DQUekMOrfu_0I5LwSuU3mdO3YJZ39saKe3qPmsCkdoA3fvnnW7uu1JiX3uFjYQ_6WaOBCN1XeCjIqnXjM8ewe0SfqTmKnsPdg=")
			.headers(headers_16),
            http("TestBuscarAmigo_55")
			.get("http://titanium17-0-es.url.trendmicro.com:80/T/128/RXh30UY_K0DQUekMOrfu_w2st-yW9bPOHxDopWJq3fQXfdpAm4aYFYckD3hxkyG5JDAQAUjJ5jxuaBibgrd9W5LU3sfSQ6RP7XTIk4LRzVwzW5cnjJ6qGIGmwr0NbS0I")
			.headers(headers_16),
            http("TestBuscarAmigo_56")
			.get("http://titanium17-0-es.url.trendmicro.com:80/T/108/RXh30UY_K0DQUekMOrfu_0I5LwSuU3mdO3YJZ39saKfWCAoK6mKS7zbB1Eb7c2_Zb6KW98lX_tIveHz-skuuRMyC4HZlNJgJ-lFtzrz_NHk=")
			.headers(headers_16),
            http("TestBuscarAmigo_57")
			.get("http://titanium17-0-es.url.trendmicro.com:80/T/108/RXh30UY_K0DQUekMOrfu_0I5LwSuU3mdO3YJZ39saKc6OeEX02hn3yFlOGOC2Plw9T4H4dFRK82dXD_UYxutXIjwKrLJsRIH5ZDdiGvAGZk=")
			.headers(headers_16),
            http("TestBuscarAmigo_58")
			.get("http://titanium17-0-es.url.trendmicro.com:80/T/128/RXh30UY_K0DQUekMOrfu_w2st-yW9bPOHxDopWJq3fRtN0ecKdKlaYa_xPrzvirfUQyOyG7d8Us6BGFviIb6SbiAy_qo0ocnz47_0NlcUCeK76z0rMXyqbvDsGNrOlkF")
			.headers(headers_16),
            http("TestBuscarAmigo_59")
			.get("http://titanium17-0-es.url.trendmicro.com:80/T/128/RXh30UY_K0DQUekMOrfu_w2st-yW9bPOHxDopWJq3fTNN4VKLBDx0w7bjjHaYD52LEowAjnYS6SFoVHriJnDGGNOKdT9VK-GSuxeWKn100CDQz3VD4DjwZHSd0ZZXAJw")
			.headers(headers_16),
            http("TestBuscarAmigo_60")
			.get("http://titanium17-0-es.url.trendmicro.com:80/T/128/RXh30UY_K0DQUekMOrfu_w2st-yW9bPOHxDopWJq3fQfrrnmM3VCwzqZAv5CmEbv_SjJtZUZj0_AR_INs85Sif-JXseBQP0t9V1ubtMlr43qeNcT_Du5lyjHsN-r-EnG")
			.headers(headers_16),
            http("TestBuscarAmigo_61")
			.get("http://titanium17-0-es.url.trendmicro.com:80/T/128/RXh30UY_K0DQUekMOrfu_w2st-yW9bPOHxDopWJq3fTfOiubrm27PHS_0ndW4UYQ9x6LiKgfAPT03CaA6Qx_xttYjwDLdbfkH4Io35-x32fRv_2I-h5TMjbgI6GI_FmA")
			.headers(headers_16),
            http("TestBuscarAmigo_62")
			.get("http://titanium17-0-es.url.trendmicro.com:80/T/128/RXh30UY_K0DQUekMOrfu_w2st-yW9bPOHxDopWJq3fR07csThMZOj6-nFId50W97nVMqXBHsK7uphllI94vJ1rCo2WTcAWy3YP55eXEWo4UQMl_0TzLZ_i9Qm22RxGok")
			.headers(headers_16),
            http("TestBuscarAmigo_63")
			.get("http://titanium17-0-es.url.trendmicro.com:80/T/128/RXh30UY_K0DQUekMOrfu_0I5LwSuU3mdO3YJZ39saKcGsUhjUPFRYot5FefAU23kutxYQOahZupH8TchWVU0bCskZME3otq5cWi36Yi9QaYNAkvfQpZ38aQayhV7cIox")
			.headers(headers_16),
            http("TestBuscarAmigo_64")
			.get("http://titanium17-0-es.url.trendmicro.com:80/T/128/RXh30UY_K0DQUekMOrfu_w2st-yW9bPOHxDopWJq3fTEB7x0Zk4CTqVr_ZLgqSfh-HZ0Zn8wA_2iwC9R1kLlLG5F3VUJcQ0uQc6nCuUl9Pi0dZMCi4B_5uuDi4ptp455")
			.headers(headers_16),
            http("TestBuscarAmigo_65")
			.get("http://titanium17-0-es.url.trendmicro.com:80/T/128/RXh30UY_K0DQUekMOrfu_w2st-yW9bPOHxDopWJq3fT5nIzeH0tyEYwJ-wfPv8vVPwRvTiBHaK5IlQt4mCEweA4-Zjhqq15HVqOVVafbHXmHtcIraRm5u3fMeApFTJey")
			.headers(headers_16),
            http("TestBuscarAmigo_66")
			.get(uri03 + "/card")
			.headers(headers_40),
            http("TestBuscarAmigo_67")
			.post("/api/friends/findNearest")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0067_request.json")),
            http("TestBuscarAmigo_68")
			.get("http://titanium17-0-es.url.trendmicro.com:80/T/108/RXh30UY_K0DQUekMOrfu_0I5LwSuU3mdO3YJZ39saKdVxtFrmbm-4VsJmkdKPOMFUYy_o5qsdT7mWqRdp1d9SRlCKztvQ51hESkYOPwKQyI=")
			.headers(headers_16),
            http("TestBuscarAmigo_69")
			.get(uri02 + "/notified.png")
			.headers(headers_69),
            http("TestBuscarAmigo_70")
			.get("http://titanium17-0-es.url.trendmicro.com:80/T/108/RXh30UY_K0DQUekMOrfu_0I5LwSuU3mdO3YJZ39saKdYaX6fPmJSLVC0Ec2LZH2RWN_xfSTXMyubX8qRedkOuScYE8CJaGOKECghZKzr3pw=")
			.headers(headers_16),
            http("TestBuscarAmigo_71")
			.get(uri01)
			.headers(headers_40),
            http("TestBuscarAmigo_72")
			.get(uri06)
			.headers(headers_40),
            http("TestBuscarAmigo_73")
			.get(uri16)
			.headers(headers_40),
            http("TestBuscarAmigo_74")
			.get(uri15)
			.headers(headers_40),
            http("TestBuscarAmigo_75")
			.get(uri09)
			.headers(headers_40),
            http("TestBuscarAmigo_76")
			.get(uri18 + "/card")
			.headers(headers_40),
            http("TestBuscarAmigo_77")
			.options("/api/friends/findNearest")
			.headers(headers_18),
            http("TestBuscarAmigo_78")
			.get("http://titanium17-0-es.url.trendmicro.com:80/T/108/RXh30UY_K0DQUekMOrfu_0I5LwSuU3mdO3YJZ39saKfpjJFdN4_uAN84WWYXi9_hu5Vk1RypiI35wuuz85J2BFmJuWtKdYP9chTX5d31oFw=")
			.headers(headers_16),
            http("TestBuscarAmigo_79")
			.get(uri20 + "/card")
			.headers(headers_40),
            http("TestBuscarAmigo_80")
			.get(uri23 + "/11.jpg")
			.headers(headers_11),
            http("TestBuscarAmigo_81")
			.post("/api/friends/findNearest")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0081_request.json")),
            http("TestBuscarAmigo_82")
			.get(uri05 + "/portada8_1618229171000_.png")
			.headers(headers_82),
            http("TestBuscarAmigo_83")
			.get("http://titanium17-0-es.url.trendmicro.com:80/T/128/RXh30UY_K0DQUekMOrfu_w2st-yW9bPOHxDopWJq3fSsiKyzSOclyjhebuwtTXWcKCbaPSN79XgVSg4Dz1tQxO7q4aWMXdDffzAd21q91uBwaaexPXIQseDIm4O5Yqk4")
			.headers(headers_16),
            http("TestBuscarAmigo_84")
			.get("http://titanium17-0-es.url.trendmicro.com:80/T/128/RXh30UY_K0DQUekMOrfu_w2st-yW9bPOHxDopWJq3fSgCwoTflqPzbG7jI4F_DthhOkA9oLd457tBatRl0JqrbCbRrrt32PSVTODaCTE7mD-4e52ivQyL2M4Ie7jj-DP")
			.headers(headers_16),
            http("TestBuscarAmigo_85")
			.get("http://titanium17-0-es.url.trendmicro.com:80/T/108/RXh30UY_K0DQUekMOrfu_0I5LwSuU3mdO3YJZ39saKcxRDpBKyppIbhKZssm-hJySx57nYu6rtLs06XqmAcTYER3jqDzhzyPFbYrCEIo_qs=")
			.headers(headers_16),
            http("TestBuscarAmigo_86")
			.options("/api/friends/findNearest")
			.headers(headers_18),
            http("TestBuscarAmigo_87")
			.get(uri13 + "/card")
			.headers(headers_40),
            http("TestBuscarAmigo_88")
			.get(uri17 + "/card")
			.headers(headers_40),
            http("TestBuscarAmigo_89")
			.get(uri10 + "/card")
			.headers(headers_40),
            http("TestBuscarAmigo_90")
			.get(uri21 + "/card")
			.headers(headers_40),
            http("TestBuscarAmigo_91")
			.get(uri04 + "/card")
			.headers(headers_40),
            http("TestBuscarAmigo_92")
			.post("/api/friends/findNearest")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0092_request.json")),
            http("TestBuscarAmigo_93")
			.get(uri11 + "/card")
			.headers(headers_40),
            http("TestBuscarAmigo_94")
			.get(uri24 + "/card")
			.headers(headers_40),
            http("TestBuscarAmigo_95")
			.get(uri07)
			.headers(headers_40),
            http("TestBuscarAmigo_96")
			.get(uri25)
			.headers(headers_40),
            http("TestBuscarAmigo_97")
			.get(uri14 + "/card")
			.headers(headers_40),
            http("TestBuscarAmigo_98")
			.get(uri28)
			.headers(headers_40),
            http("TestBuscarAmigo_99")
			.get(uri20 + "/1604007537478%5B1%5D.jpg")
			.headers(headers_82),
            http("TestBuscarAmigo_100")
			.get(uri27 + "/card")
			.headers(headers_40),
            http("TestBuscarAmigo_101")
			.get(uri13 + "/pp.jfif_.jpeg")
			.headers(headers_82),
            http("TestBuscarAmigo_102")
			.get(uri17 + "/descarga.jpg")
			.headers(headers_82),
            http("TestBuscarAmigo_103")
			.get(uri04 + "/avatar.jpg")
			.headers(headers_11),
            http("TestBuscarAmigo_104")
			.get(uri10 + "/IMG_20210405_230807_141.jpg")
			.headers(headers_11),
            http("TestBuscarAmigo_105")
			.get(uri24 + "/601A725E-7728-440D-9106-2816FA008921.jpeg")
			.headers(headers_82),
            http("TestBuscarAmigo_106")
			.get(uri27 + "/mlg_dog02.png")
			.headers(headers_82),
            http("TestBuscarAmigo_107")
			.get(uri14 + "/foto%20copy.png")
			.headers(headers_82),
            http("TestBuscarAmigo_108")
			.get(uri21 + "/d06ebd1d52dd9110ac7d2944b7fe403d.png")
			.headers(headers_11),
            http("TestBuscarAmigo_109")
			.get(uri03 + "/DSC100444071.jpg")
			.headers(headers_82),
            http("TestBuscarAmigo_110")
			.get(uri11 + "/img-was%20(2).jpg")
			.headers(headers_82)))
		.pause(1)
		.exec(http("TestBuscarAmigo_111")
			.options("/api/friends/list/pending")
			.headers(headers_18)
			.resources(http("TestBuscarAmigo_112")
			.options("/api/friends/list")
			.headers(headers_18),
            http("TestBuscarAmigo_113")
			.post("/api/friends/list")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0113_request.json")),
            http("TestBuscarAmigo_114")
			.post("/api/friends/list/pending")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0114_request.json")),
            http("TestBuscarAmigo_115")
			.get(uri18 + "/WhatsApp%20Image%202020-03-28%20at%2016.20.56.jpeg")
			.headers(headers_11),
            http("TestBuscarAmigo_116")
			.post("/api/friends/findNearest")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0116_request.json")),
            http("TestBuscarAmigo_117")
			.post("/api/friends/findNearest")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0117_request.json")),
            http("TestBuscarAmigo_118")
			.post("/api/friends/findNearest")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0118_request.json")),
            http("TestBuscarAmigo_119")
			.post("/api/friends/findNearest")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0119_request.json")),
            http("TestBuscarAmigo_120")
			.post("/api/friends/findNearest")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0120_request.json"))))
		.pause(1)
		.exec(http("TestBuscarAmigo_121")
			.options("/api/users/search/name")
			.headers(headers_18)
			.resources(http("TestBuscarAmigo_122")
			.post("/api/users/search/name")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0122_request.json"))))
		.pause(1)
		.exec(http("TestBuscarAmigo_123")
			.options("/api/users/lastTime/update")
			.headers(headers_18)
			.resources(http("TestBuscarAmigo_124")
			.post("/api/users/lastTime/update")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0124_request.json")),
            http("TestBuscarAmigo_125")
			.post("/api/users/lastTime/update")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0125_request.json")),
            http("TestBuscarAmigo_126")
			.post("/api/users/lastTime/update")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0126_request.json")),
            http("TestBuscarAmigo_127")
			.post("/api/users/lastTime/update")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0127_request.json")),
            http("TestBuscarAmigo_128")
			.post("/api/users/lastTime/update")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0128_request.json")),
            http("TestBuscarAmigo_129")
			.post("/api/users/lastTime/update")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0129_request.json")),
            http("TestBuscarAmigo_130")
			.post("/api/users/lastTime/update")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0130_request.json")),
            http("TestBuscarAmigo_131")
			.post("/api/users/lastTime/update")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0131_request.json")),
            http("TestBuscarAmigo_132")
			.post("/api/friends/list")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0132_request.json")),
            http("TestBuscarAmigo_133")
			.options("/api/friends/check")
			.headers(headers_18),
            http("TestBuscarAmigo_134")
			.post("/api/friends/list/pending")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0134_request.json")),
            http("TestBuscarAmigo_135")
			.post("/api/friends/list")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0135_request.json")),
            http("TestBuscarAmigo_136")
			.options("/api/users/lastTime/update")
			.headers(headers_18),
            http("TestBuscarAmigo_137")
			.options("/api/friends/check")
			.headers(headers_18),
            http("TestBuscarAmigo_138")
			.options("/api/users/lastTime/update")
			.headers(headers_18),
            http("TestBuscarAmigo_139")
			.options("/api/friends/list")
			.headers(headers_18),
            http("TestBuscarAmigo_140")
			.post("/api/friends/check")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0140_request.json")),
            http("TestBuscarAmigo_141")
			.options("/api/friends/findNearest")
			.headers(headers_18),
            http("TestBuscarAmigo_142")
			.post("/api/friends/check")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0142_request.json")),
            http("TestBuscarAmigo_143")
			.post("/api/friends/list")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0143_request.json")),
            http("TestBuscarAmigo_144")
			.post("/api/users/lastTime/update")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0144_request.json")),
            http("TestBuscarAmigo_145")
			.post("/api/users/lastTime/update")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0145_request.json")),
            http("TestBuscarAmigo_146")
			.post("/api/users/lastTime/update")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0146_request.json")),
            http("TestBuscarAmigo_147")
			.get("http://titanium17-0-es.url.trendmicro.com:80/T/152/RXh30UY_K0DQUekMOrfu_xk4CqzKx4-SXIN_XrtC4vukNsGXvgfMi9VoaYglvr_fc1ZBHRzTtzZrPJ64-iia_2u_kkgp6spcnWSHxhYk7Ewy7SLNfaAvYGcMv7MKA_fYNcVXmBhiWJC40BC7n_90Qg==")
			.headers(headers_16),
            http("TestBuscarAmigo_148")
			.get("http://titanium17-0-es.url.trendmicro.com:80/T/152/RXh30UY_K0DQUekMOrfu_xk4CqzKx4-SXIN_XrtC4vukNsGXvgfMi9VoaYglvr_fc1ZBHRzTtzZrPJ64-iia_2u_kkgp6spcnWSHxhYk7Ewy7SLNfaAvYGcMv7MKA_fYNcVXmBhiWJC40BC7n_90Qg==")
			.headers(headers_16),
            http("TestBuscarAmigo_149")
			.options("/api/friends/findNearest")
			.headers(headers_18),
            http("TestBuscarAmigo_150")
			.options("/api/friends/findNearest")
			.headers(headers_18),
            http("TestBuscarAmigo_151")
			.options("/api/friends/findNearest")
			.headers(headers_18),
            http("TestBuscarAmigo_152")
			.options("/api/friends/findNearest")
			.headers(headers_18),
            http("TestBuscarAmigo_153")
			.post("/api/friends/list")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0153_request.json")),
            http("TestBuscarAmigo_154")
			.post("/api/friends/findNearest")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0154_request.json")),
            http("TestBuscarAmigo_155")
			.post("/api/friends/list")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0155_request.json")),
            http("TestBuscarAmigo_156")
			.post("/api/friends/findNearest")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0156_request.json")),
            http("TestBuscarAmigo_157")
			.post("/api/friends/findNearest")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0157_request.json")),
            http("TestBuscarAmigo_158")
			.post("/api/friends/findNearest")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0158_request.json")),
            http("TestBuscarAmigo_159")
			.post("/api/friends/findNearest")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0159_request.json")),
            http("TestBuscarAmigo_160")
			.post("/api/friends/list")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0160_request.json")),
            http("TestBuscarAmigo_161")
			.post("/api/friends/list")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0161_request.json")),
            http("TestBuscarAmigo_162")
			.post("/api/friends/list")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0162_request.json")),
            http("TestBuscarAmigo_163")
			.post("/api/friends/list")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0163_request.json")),
            http("TestBuscarAmigo_164")
			.post("/api/friends/list")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0164_request.json")),
            http("TestBuscarAmigo_165")
			.post("/api/friends/list")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0165_request.json")),
            http("TestBuscarAmigo_166")
			.post("/api/friends/list")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0166_request.json")),
            http("TestBuscarAmigo_167")
			.post("/api/friends/list")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0167_request.json")),
            http("TestBuscarAmigo_168")
			.post("/api/friends/list")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0168_request.json")),
            http("TestBuscarAmigo_169")
			.post("/api/friends/list")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0169_request.json")),
            http("TestBuscarAmigo_170")
			.post("/api/friends/list")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0170_request.json")),
            http("TestBuscarAmigo_171")
			.post("/api/friends/list")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0171_request.json")),
            http("TestBuscarAmigo_172")
			.post("/api/friends/list")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0172_request.json")),
            http("TestBuscarAmigo_173")
			.post("/api/friends/list")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0173_request.json")),
            http("TestBuscarAmigo_174")
			.post("/api/friends/list")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0174_request.json")),
            http("TestBuscarAmigo_175")
			.post("/api/friends/list")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0175_request.json")),
            http("TestBuscarAmigo_176")
			.post("/api/friends/list")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0176_request.json")),
            http("TestBuscarAmigo_177")
			.post("/api/friends/list")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0177_request.json")),
            http("TestBuscarAmigo_178")
			.post("/api/friends/list")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0178_request.json")),
            http("TestBuscarAmigo_179")
			.post("/api/friends/list")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0179_request.json")),
            http("TestBuscarAmigo_180")
			.post("/api/friends/list")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0180_request.json")),
            http("TestBuscarAmigo_181")
			.post("/api/friends/list")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0181_request.json")),
            http("TestBuscarAmigo_182")
			.post("/api/friends/list")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0182_request.json")),
            http("TestBuscarAmigo_183")
			.post("/api/friends/list")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0183_request.json")),
            http("TestBuscarAmigo_184")
			.options("/api/friends/list/pending")
			.headers(headers_18),
            http("TestBuscarAmigo_185")
			.post("/api/friends/list")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0185_request.json")),
            http("TestBuscarAmigo_186")
			.post("/api/friends/list")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0186_request.json")),
            http("TestBuscarAmigo_187")
			.post("/api/friends/list/pending")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0187_request.json")),
            http("TestBuscarAmigo_188")
			.post("/api/friends/findNearest")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0188_request.json")),
            http("TestBuscarAmigo_189")
			.post("/api/friends/findNearest")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0189_request.json")),
            http("TestBuscarAmigo_190")
			.post("/api/friends/findNearest")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0190_request.json")),
            http("TestBuscarAmigo_191")
			.post("/api/friends/findNearest")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0191_request.json")),
            http("TestBuscarAmigo_192")
			.post("/api/friends/findNearest")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0192_request.json")),
            http("TestBuscarAmigo_193")
			.post("/api/friends/list")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0193_request.json")),
            http("TestBuscarAmigo_194")
			.post("/api/friends/list")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0194_request.json")),
            http("TestBuscarAmigo_195")
			.post("/api/friends/list")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0195_request.json")),
            http("TestBuscarAmigo_196")
			.post("/api/friends/list")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0196_request.json")),
            http("TestBuscarAmigo_197")
			.post("/api/friends/list")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0197_request.json")),
            http("TestBuscarAmigo_198")
			.post("/api/friends/list")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0198_request.json")),
            http("TestBuscarAmigo_199")
			.post("/api/friends/list")
			.headers(headers_12)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0199_request.json"))))

	setUp(scn.inject(constantUsersPerSec(1) during (60 seconds) randomized)).protocols(httpProtocol)
}