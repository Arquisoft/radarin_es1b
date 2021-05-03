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
		.userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:88.0) Gecko/20100101 Firefox/88.0")

	val headers_0 = Map(
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3",
		"Access-Control-Request-Headers" -> "content-type",
		"Access-Control-Request-Method" -> "POST",
		"Origin" -> "http://radarines1bwebapp.herokuapp.com")

	val headers_5 = Map(
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3",
		"Content-Type" -> "application/json",
		"Origin" -> "http://radarines1bwebapp.herokuapp.com")

	val headers_56 = Map(
		"Accept" -> "image/webp,*/*",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3")

	val headers_58 = Map(
		"Cache-Control" -> "no-cache",
		"Proxy-Connection" -> "Keep-Alive",
		"User-Agent" -> "TMUFE",
		"X-TM-UF-INFO" -> "440/Uj3tcG7ArMEBOMJxxnpNECS-t-gCit1JlmZj4jges7FdsJPPWiaMC7Frn0gbXWW2ZkJOVLwXnn0fQbdRfDO1jd2dqfNcQP0j9OSlo6XEfl-CtEB9zcg5ZHetQcxXx14cjP3laSf0ookv0hOza0RqdOgebkJ49-PrJ7hll0SOh6_bxVTpe0dllpJytQpUpCk6FZC0_6qfl7dcMc6dO5GMMFnu906olEDSassPEu6dm7jVYVvJjvDHGlrR9KRljCs-X_mK7u0eMBWCNm6hGoQpmmtLOrEaeP4gGbveHuCmGi5nlaaJuCXENNiRduWO4_qCi7ueG_C2GCV2G3C6TKJwkhuEWayp3jv8oAx3MDPJQMDp1xCQaoQ5ujaGdnKpZM_od7fHaCDHMySLggdxBSrzooOmgO-kvbymk1XyrtJQuNKZQgNgTBWAwQ==")

	val headers_61 = Map(
		"Accept" -> "application/n-quads,application/trig;q=0.95,application/ld+json;q=0.9,application/n-triples;q=0.8,*/*;q=0.1",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3",
		"Origin" -> "http://radarines1bwebapp.herokuapp.com")

    val uri01 = "https://uo269763.inrupt.net/profile/card"
    val uri02 = "https://elpaco.inrupt.net/profile/pic.png"
    val uri03 = "https://uo247134.solidcommunity.net/profile/DSC100444071.jpg"
    val uri04 = "https://uo271397.inrupt.net/profile/portada8_1618229171000_.png"
    val uri05 = "https://lucialvareezz.solidcommunity.net/profile/601A725E-7728-440D-9106-2816FA008921.jpeg"
    val uri06 = "https://uo269450.solidcommunity.net/profile/IMG_20210405_230807_141.jpg"
    val uri07 = "https://uo265336.inrupt.net/profile/img-was%20(2).jpg"
    val uri09 = "http://titanium17-0-es.url.trendmicro.com/T/128/RXh30UY_K0DQUekMOrfu_69q4EJPWVZ6OiLJ0ntZ0yQhEv-bcKdwKFvzqDfobwgMmGVhBBCyrYY1MeytY5eIZ5AC_ig6QsUpAr39d0rSFWDHtRk0Vs1ImTIbNqt_m31_"
    val uri10 = "https://asw2021es1b.solidcommunity.net/profile/pp.jfif_.jpeg"
    val uri11 = "https://victoriaalvarez.solidcommunity.net/profile/foto%20copy.png"
    val uri12 = "https://ismaelsolid.solidcommunity.net/profile/mlg_dog02.png"
    val uri13 = "https://javigrao.solidcommunity.net/profile/descarga.jpg"
    val uri14 = "https://manuelarroyo.inrupt.net/profile/WhatsApp%20Image%202020-03-28%20at%2016.20.56.jpeg"

	val scn = scenario("TestBuscarAmigo")
		.exec(http("TestBuscarAmigo_0")
			.options("/api/friends/list")
			.headers(headers_0)
			.resources(http("TestBuscarAmigo_1")
			.options("/api/friends/list")
			.headers(headers_0),
            http("TestBuscarAmigo_2")
			.options("/api/friends/list/pending")
			.headers(headers_0),
            http("TestBuscarAmigo_3")
			.options("/api/friends/list/pending")
			.headers(headers_0),
            http("TestBuscarAmigo_4")
			.options("/api/friends/list")
			.headers(headers_0),
            http("TestBuscarAmigo_5")
			.post("/api/friends/list")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0005_request.json")),
            http("TestBuscarAmigo_6")
			.options("/api/friends/findNearest")
			.headers(headers_0),
            http("TestBuscarAmigo_7")
			.options("/api/friends/findNearest")
			.headers(headers_0),
            http("TestBuscarAmigo_8")
			.options("/api/friends/findNearest")
			.headers(headers_0),
            http("TestBuscarAmigo_9")
			.options("/api/friends/findNearest")
			.headers(headers_0),
            http("TestBuscarAmigo_10")
			.post("/api/friends/findNearest")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0010_request.json")),
            http("TestBuscarAmigo_11")
			.post("/api/friends/findNearest")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0011_request.json")),
            http("TestBuscarAmigo_12")
			.post("/api/friends/findNearest")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0012_request.json")),
            http("TestBuscarAmigo_13")
			.post("/api/friends/findNearest")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0013_request.json")),
            http("TestBuscarAmigo_14")
			.post("/api/friends/list")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0014_request.json")),
            http("TestBuscarAmigo_15")
			.post("/api/friends/list/pending")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0015_request.json")),
            http("TestBuscarAmigo_16")
			.post("/api/friends/list/pending")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0016_request.json")),
            http("TestBuscarAmigo_17")
			.post("/api/friends/list")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0017_request.json")),
            http("TestBuscarAmigo_18")
			.options("/api/friends/findNearest")
			.headers(headers_0),
            http("TestBuscarAmigo_19")
			.post("/api/friends/findNearest")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0019_request.json")),
            http("TestBuscarAmigo_20")
			.options("/api/friends/findNearest")
			.headers(headers_0),
            http("TestBuscarAmigo_21")
			.post("/api/friends/findNearest")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0021_request.json")),
            http("TestBuscarAmigo_22")
			.post("/api/friends/findNearest")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0022_request.json")),
            http("TestBuscarAmigo_23")
			.post("/api/friends/findNearest")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0023_request.json")),
            http("TestBuscarAmigo_24")
			.post("/api/friends/findNearest")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0024_request.json")),
            http("TestBuscarAmigo_25")
			.post("/api/friends/findNearest")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0025_request.json")),
            http("TestBuscarAmigo_26")
			.post("/api/friends/findNearest")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0026_request.json")),
            http("TestBuscarAmigo_27")
			.post("/api/friends/findNearest")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0027_request.json")),
            http("TestBuscarAmigo_28")
			.post("/api/friends/findNearest")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0028_request.json")),
            http("TestBuscarAmigo_29")
			.post("/api/friends/findNearest")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0029_request.json")),
            http("TestBuscarAmigo_30")
			.post("/api/friends/findNearest")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0030_request.json")),
            http("TestBuscarAmigo_31")
			.post("/api/friends/findNearest")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0031_request.json")),
            http("TestBuscarAmigo_32")
			.post("/api/friends/findNearest")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0032_request.json")),
            http("TestBuscarAmigo_33")
			.post("/api/friends/findNearest")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0033_request.json"))))
		.pause(3)
		.exec(http("TestBuscarAmigo_34")
			.options("/api/users/lastTime/update")
			.headers(headers_0)
			.resources(http("TestBuscarAmigo_35")
			.post("/api/friends/list/pending")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0035_request.json")),
            http("TestBuscarAmigo_36")
			.post("/api/friends/list/pending")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0036_request.json")),
            http("TestBuscarAmigo_37")
			.post("/api/users/lastTime/update")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0037_request.json")),
            http("TestBuscarAmigo_38")
			.post("/api/friends/list/pending")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0038_request.json")),
            http("TestBuscarAmigo_39")
			.post("/api/friends/list/pending")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0039_request.json")),
            http("TestBuscarAmigo_40")
			.post("/api/friends/list/pending")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0040_request.json")),
            http("TestBuscarAmigo_41")
			.post("/api/friends/list/pending")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0041_request.json")),
            http("TestBuscarAmigo_42")
			.post("/api/friends/list/pending")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0042_request.json")),
            http("TestBuscarAmigo_43")
			.post("/api/friends/list/pending")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0043_request.json")),
            http("TestBuscarAmigo_44")
			.post("/api/friends/list/pending")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0044_request.json")),
            http("TestBuscarAmigo_45")
			.post("/api/friends/list/pending")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0045_request.json")),
            http("TestBuscarAmigo_46")
			.options("/api/users/search/name")
			.headers(headers_0),
            http("TestBuscarAmigo_47")
			.post("/api/users/search/name")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0047_request.json")),
            http("TestBuscarAmigo_48")
			.post("/api/friends/list")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0048_request.json")),
            http("TestBuscarAmigo_49")
			.post("/api/friends/list/pending")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0049_request.json")),
            http("TestBuscarAmigo_50")
			.post("/api/friends/findNearest")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0050_request.json")),
            http("TestBuscarAmigo_51")
			.post("/api/friends/findNearest")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0051_request.json")),
            http("TestBuscarAmigo_52")
			.post("/api/friends/findNearest")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0052_request.json")),
            http("TestBuscarAmigo_53")
			.post("/api/friends/findNearest")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0053_request.json")),
            http("TestBuscarAmigo_54")
			.post("/api/friends/findNearest")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0054_request.json")),
            http("TestBuscarAmigo_55")
			.post("/api/friends/findNearest")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0055_request.json")),
            http("TestBuscarAmigo_56")
			.get(uri04)
			.headers(headers_56),
            http("TestBuscarAmigo_57")
			.get(uri12)
			.headers(headers_56),
            http("TestBuscarAmigo_58")
			.get("http://titanium17-0-es.url.trendmicro.com:80/T/128/RXh30UY_K0DQUekMOrfu_69q4EJPWVZ6OiLJ0ntZ0yQhEv-bcKdwKFvzqDfobwgMmGVhBBCyrYY1MeytY5eIZ5AC_ig6QsUpAr39d0rSFWDHtRk0Vs1ImTIbNqt_m31_")
			.headers(headers_58),
            http("TestBuscarAmigo_59")
			.get(uri07)
			.headers(headers_56),
            http("TestBuscarAmigo_60")
			.get(uri14)
			.headers(headers_56),
            http("TestBuscarAmigo_61")
			.get(uri01)
			.headers(headers_61),
            http("TestBuscarAmigo_62")
			.get(uri13)
			.headers(headers_56),
            http("TestBuscarAmigo_63")
			.get(uri10)
			.headers(headers_56),
            http("TestBuscarAmigo_64")
			.get(uri03)
			.headers(headers_56),
            http("TestBuscarAmigo_65")
			.get(uri05)
			.headers(headers_56),
            http("TestBuscarAmigo_66")
			.get(uri06)
			.headers(headers_56),
            http("TestBuscarAmigo_67")
			.get(uri11)
			.headers(headers_56),
            http("TestBuscarAmigo_68")
			.get(uri02)
			.headers(headers_56)))
		.pause(3)
		.exec(http("TestBuscarAmigo_69")
			.options("/api/friends/list")
			.headers(headers_0)
			.resources(http("TestBuscarAmigo_70")
			.options("/api/friends/list/pending")
			.headers(headers_0),
            http("TestBuscarAmigo_71")
			.options("/api/users/search/name")
			.headers(headers_0),
            http("TestBuscarAmigo_72")
			.post("/api/friends/list")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0072_request.json")),
            http("TestBuscarAmigo_73")
			.post("/api/friends/list/pending")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0073_request.json")),
            http("TestBuscarAmigo_74")
			.post("/api/users/search/name")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0074_request.json")),
            http("TestBuscarAmigo_75")
			.options("/api/friends/findNearest")
			.headers(headers_0),
            http("TestBuscarAmigo_76")
			.options("/api/friends/findNearest")
			.headers(headers_0),
            http("TestBuscarAmigo_77")
			.options("/api/friends/findNearest")
			.headers(headers_0),
            http("TestBuscarAmigo_78")
			.options("/api/friends/findNearest")
			.headers(headers_0),
            http("TestBuscarAmigo_79")
			.options("/api/friends/findNearest")
			.headers(headers_0),
            http("TestBuscarAmigo_80")
			.options("/api/friends/findNearest")
			.headers(headers_0),
            http("TestBuscarAmigo_81")
			.post("/api/friends/findNearest")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0081_request.json")),
            http("TestBuscarAmigo_82")
			.post("/api/friends/findNearest")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0082_request.json")),
            http("TestBuscarAmigo_83")
			.post("/api/friends/findNearest")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0083_request.json")),
            http("TestBuscarAmigo_84")
			.post("/api/friends/findNearest")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0084_request.json")),
            http("TestBuscarAmigo_85")
			.post("/api/friends/findNearest")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0085_request.json")),
            http("TestBuscarAmigo_86")
			.post("/api/friends/findNearest")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0086_request.json")),
            http("TestBuscarAmigo_87")
			.options("/api/users/lastTime/update")
			.headers(headers_0),
            http("TestBuscarAmigo_88")
			.options("/api/users/lastTime/update")
			.headers(headers_0),
            http("TestBuscarAmigo_89")
			.options("/api/users/lastTime/update")
			.headers(headers_0),
            http("TestBuscarAmigo_90")
			.options("/api/users/lastTime/update")
			.headers(headers_0),
            http("TestBuscarAmigo_91")
			.options("/api/users/lastTime/update")
			.headers(headers_0),
            http("TestBuscarAmigo_92")
			.options("/api/users/lastTime/update")
			.headers(headers_0),
            http("TestBuscarAmigo_93")
			.options("/api/users/lastTime/update")
			.headers(headers_0),
            http("TestBuscarAmigo_94")
			.post("/api/friends/list")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0094_request.json")),
            http("TestBuscarAmigo_95")
			.post("/api/users/lastTime/update")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0095_request.json")),
            http("TestBuscarAmigo_96")
			.post("/api/users/lastTime/update")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0096_request.json")),
            http("TestBuscarAmigo_97")
			.post("/api/users/lastTime/update")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0097_request.json")),
            http("TestBuscarAmigo_98")
			.post("/api/users/lastTime/update")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0098_request.json")),
            http("TestBuscarAmigo_99")
			.post("/api/users/lastTime/update")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0099_request.json")),
            http("TestBuscarAmigo_100")
			.post("/api/friends/list")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0100_request.json")),
            http("TestBuscarAmigo_101")
			.post("/api/users/lastTime/update")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0101_request.json")),
            http("TestBuscarAmigo_102")
			.options("/api/users/lastTime/update")
			.headers(headers_0),
            http("TestBuscarAmigo_103")
			.options("/api/friends/check")
			.headers(headers_0),
            http("TestBuscarAmigo_104")
			.options("/api/users/lastTime/update")
			.headers(headers_0),
            http("TestBuscarAmigo_105")
			.post("/api/users/lastTime/update")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0105_request.json")),
            http("TestBuscarAmigo_106")
			.post("/api/users/lastTime/update")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0106_request.json")),
            http("TestBuscarAmigo_107")
			.post("/api/users/lastTime/update")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0107_request.json")),
            http("TestBuscarAmigo_108")
			.post("/api/friends/list")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0108_request.json")),
            http("TestBuscarAmigo_109")
			.post("/api/friends/check")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0109_request.json")),
            http("TestBuscarAmigo_110")
			.options("/api/friends/check")
			.headers(headers_0),
            http("TestBuscarAmigo_111")
			.post("/api/users/lastTime/update")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0111_request.json")),
            http("TestBuscarAmigo_112")
			.post("/api/users/lastTime/update")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0112_request.json")),
            http("TestBuscarAmigo_113")
			.post("/api/friends/list")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0113_request.json")),
            http("TestBuscarAmigo_114")
			.post("/api/friends/check")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0114_request.json")),
            http("TestBuscarAmigo_115")
			.post("/api/friends/list")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0115_request.json")),
            http("TestBuscarAmigo_116")
			.post("/api/friends/list")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0116_request.json")),
            http("TestBuscarAmigo_117")
			.post("/api/friends/list")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0117_request.json")),
            http("TestBuscarAmigo_118")
			.post("/api/friends/list")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0118_request.json")),
            http("TestBuscarAmigo_119")
			.post("/api/friends/list")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0119_request.json")),
            http("TestBuscarAmigo_120")
			.post("/api/friends/list")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0120_request.json")),
            http("TestBuscarAmigo_121")
			.post("/api/friends/list")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0121_request.json")),
            http("TestBuscarAmigo_122")
			.post("/api/friends/list")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0122_request.json")),
            http("TestBuscarAmigo_123")
			.post("/api/friends/list")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0123_request.json")),
            http("TestBuscarAmigo_124")
			.post("/api/friends/list")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0124_request.json")),
            http("TestBuscarAmigo_125")
			.post("/api/friends/list")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0125_request.json")),
            http("TestBuscarAmigo_126")
			.post("/api/friends/list")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0126_request.json")),
            http("TestBuscarAmigo_127")
			.post("/api/friends/list")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0127_request.json")),
            http("TestBuscarAmigo_128")
			.post("/api/friends/list")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0128_request.json")),
            http("TestBuscarAmigo_129")
			.post("/api/friends/list")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0129_request.json")),
            http("TestBuscarAmigo_130")
			.post("/api/friends/list")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0130_request.json")),
            http("TestBuscarAmigo_131")
			.post("/api/friends/list")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0131_request.json")),
            http("TestBuscarAmigo_132")
			.post("/api/friends/list")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0132_request.json")),
            http("TestBuscarAmigo_133")
			.post("/api/friends/list")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0133_request.json")),
            http("TestBuscarAmigo_134")
			.post("/api/friends/list")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/testbuscaramigo/0134_request.json"))))

	setUp(scn.inject(rampUsers(50) during(60 seconds))).protocols(httpProtocol)
}