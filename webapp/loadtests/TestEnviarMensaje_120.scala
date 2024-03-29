package computerdatabase

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class TestEnviarMensaje extends Simulation {

	val httpProtocol = http
		.baseUrl("https://radarines1brestapi.herokuapp.com")
		.inferHtmlResources()
		.acceptHeader("*/*")
		.userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:76.0) Gecko/20100101 Firefox/76.0")

	val headers_0 = Map(
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3",
		"Access-Control-Request-Headers" -> "content-type",
		"Access-Control-Request-Method" -> "POST",
		"Origin" -> "http://radarines1bwebapp.herokuapp.com")

	val headers_4 = Map(
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3",
		"Content-Type" -> "application/json",
		"Origin" -> "http://radarines1bwebapp.herokuapp.com")

	val headers_93 = Map(
		"Proxy-Connection" -> "Keep-Alive",
		"User-Agent" -> "TMUFE",
		"X-TM-UF-INFO" -> "440/Uj3tcG7ArMEBOMJxxnpNECS-t-gCit1JlmZj4jges7FdsJPPWiaMC7Frn0gbXWW2ZkJOVLwXnn0fQbdRfDO1jd2dqfNcQP0j9OSlo6XEfl-CtEB9zcg5ZHetQcxXx14cjP3laSf0ookv0hOza0RqdOgebkJ49-PrJ7hll0SOh6_bxVTpe0dllpJytQpUpCk6othXrlp8y_lcMc6dO5GMMFnu906olEDSassPEu6dm7jVYVvJjvDHGor4CNAu4veoX_mK7u0eMBWCNm6hGoQpmmtLOrEaeP4gGbveHuCmGi5nlaaJuCXENNiRduWO4_qCi7ueG_C2GCV2G3C6TKJwkhuEWayp3jv8oAx3MDPJQMDp1xCQaoQ5ujaGdnKpZM_od7fHaCDHMySLggdxBSrzooOmgO-kvbymk1XyrtJQuNKZQgNgTBWAwQ==")

    val uri2 = "http://titanium17-0-es.url.trendmicro.com/T/128/RXh30UY_K0DQUekMOrfu_xk4CqzKx4-SXIN_XrtC4vukNsGXvgfMi9VoaYglvr_fc1ZBHRzTtzZrPJ64-iia_2u_kkgp6spcnWSHxhYk7EyengqoVxecLwETaTDPwTfn"

	val scn = scenario("TestEnviarMensaje")
		.exec(http("TestEnviarMensaje_0")
			.options("/api/friends/list/pending")
			.headers(headers_0)
			.resources(http("TestEnviarMensaje_1")
			.options("/api/friends/list")
			.headers(headers_0),
            http("TestEnviarMensaje_2")
			.options("/api/friends/list")
			.headers(headers_0),
            http("TestEnviarMensaje_3")
			.options("/api/friends/list/pending")
			.headers(headers_0),
            http("TestEnviarMensaje_4")
			.post("/api/friends/list")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0004_request.json")),
            http("TestEnviarMensaje_5")
			.post("/api/friends/list/pending")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0005_request.json")),
            http("TestEnviarMensaje_6")
			.post("/api/friends/list/pending")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0006_request.json")),
            http("TestEnviarMensaje_7")
			.post("/api/friends/list")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0007_request.json")),
            http("TestEnviarMensaje_8")
			.options("/api/friends/findNearest")
			.headers(headers_0),
            http("TestEnviarMensaje_9")
			.options("/api/friends/findNearest")
			.headers(headers_0),
            http("TestEnviarMensaje_10")
			.options("/api/friends/findNearest")
			.headers(headers_0),
            http("TestEnviarMensaje_11")
			.post("/api/friends/findNearest")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0011_request.json")),
            http("TestEnviarMensaje_12")
			.post("/api/friends/findNearest")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0012_request.json")),
            http("TestEnviarMensaje_13")
			.post("/api/friends/findNearest")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0013_request.json")),
            http("TestEnviarMensaje_14")
			.post("/api/friends/findNearest")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0014_request.json")),
            http("TestEnviarMensaje_15")
			.post("/api/friends/findNearest")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0015_request.json")),
            http("TestEnviarMensaje_16")
			.post("/api/friends/findNearest")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0016_request.json")),
            http("TestEnviarMensaje_17")
			.options("/api/friends/findNearest")
			.headers(headers_0),
            http("TestEnviarMensaje_18")
			.options("/api/friends/findNearest")
			.headers(headers_0),
            http("TestEnviarMensaje_19")
			.post("/api/friends/findNearest")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0019_request.json")),
            http("TestEnviarMensaje_20")
			.post("/api/friends/findNearest")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0020_request.json")),
            http("TestEnviarMensaje_21")
			.post("/api/friends/findNearest")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0021_request.json")),
            http("TestEnviarMensaje_22")
			.post("/api/friends/findNearest")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0022_request.json"))))
		.pause(2)
		.exec(http("TestEnviarMensaje_23")
			.options("/api/users/lastTime/update")
			.headers(headers_0)
			.resources(http("TestEnviarMensaje_24")
			.post("/api/friends/list/pending")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0024_request.json")),
            http("TestEnviarMensaje_25")
			.post("/api/friends/list/pending")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0025_request.json")),
            http("TestEnviarMensaje_26")
			.post("/api/friends/list/pending")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0026_request.json")),
            http("TestEnviarMensaje_27")
			.post("/api/friends/list/pending")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0027_request.json")),
            http("TestEnviarMensaje_28")
			.post("/api/users/lastTime/update")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0028_request.json")),
            http("TestEnviarMensaje_29")
			.post("/api/friends/list/pending")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0029_request.json")),
            http("TestEnviarMensaje_30")
			.post("/api/friends/list/pending")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0030_request.json")),
            http("TestEnviarMensaje_31")
			.post("/api/friends/list/pending")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0031_request.json")),
            http("TestEnviarMensaje_32")
			.post("/api/friends/list/pending")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0032_request.json")),
            http("TestEnviarMensaje_33")
			.post("/api/friends/list/pending")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0033_request.json")),
            http("TestEnviarMensaje_34")
			.post("/api/friends/list/pending")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0034_request.json")),
            http("TestEnviarMensaje_35")
			.post("/api/friends/list/pending")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0035_request.json")),
            http("TestEnviarMensaje_36")
			.post("/api/friends/list/pending")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0036_request.json")),
            http("TestEnviarMensaje_37")
			.post("/api/friends/list/pending")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0037_request.json")),
            http("TestEnviarMensaje_38")
			.post("/api/friends/list/pending")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0038_request.json")),
            http("TestEnviarMensaje_39")
			.post("/api/friends/list/pending")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0039_request.json")),
            http("TestEnviarMensaje_40")
			.post("/api/friends/list/pending")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0040_request.json")),
            http("TestEnviarMensaje_41")
			.post("/api/friends/list/pending")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0041_request.json")),
            http("TestEnviarMensaje_42")
			.post("/api/friends/list/pending")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0042_request.json")),
            http("TestEnviarMensaje_43")
			.post("/api/friends/list/pending")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0043_request.json")),
            http("TestEnviarMensaje_44")
			.post("/api/friends/list/pending")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0044_request.json")),
            http("TestEnviarMensaje_45")
			.post("/api/friends/list")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0045_request.json")),
            http("TestEnviarMensaje_46")
			.post("/api/friends/list/pending")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0046_request.json")),
            http("TestEnviarMensaje_47")
			.post("/api/friends/list")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0047_request.json")),
            http("TestEnviarMensaje_48")
			.post("/api/friends/list")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0048_request.json")),
            http("TestEnviarMensaje_49")
			.post("/api/friends/findNearest")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0049_request.json")),
            http("TestEnviarMensaje_50")
			.post("/api/friends/findNearest")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0050_request.json")),
            http("TestEnviarMensaje_51")
			.post("/api/friends/findNearest")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0051_request.json")),
            http("TestEnviarMensaje_52")
			.post("/api/friends/findNearest")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0052_request.json")),
            http("TestEnviarMensaje_53")
			.post("/api/friends/findNearest")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0053_request.json")),
            http("TestEnviarMensaje_54")
			.post("/api/friends/list")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0054_request.json")),
            http("TestEnviarMensaje_55")
			.post("/api/friends/list")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0055_request.json")),
            http("TestEnviarMensaje_56")
			.post("/api/friends/list")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0056_request.json")),
            http("TestEnviarMensaje_57")
			.post("/api/friends/list")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0057_request.json")),
            http("TestEnviarMensaje_58")
			.post("/api/friends/list")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0058_request.json")),
            http("TestEnviarMensaje_59")
			.post("/api/friends/list")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0059_request.json")),
            http("TestEnviarMensaje_60")
			.post("/api/friends/list")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0060_request.json")),
            http("TestEnviarMensaje_61")
			.post("/api/friends/list")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0061_request.json")),
            http("TestEnviarMensaje_62")
			.options("/api/msg/list")
			.headers(headers_0),
            http("TestEnviarMensaje_63")
			.post("/api/friends/list")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0063_request.json")),
            http("TestEnviarMensaje_64")
			.post("/api/msg/list")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0064_request.json"))))
		.pause(2)
		.exec(http("TestEnviarMensaje_65")
			.post("/api/msg/list")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0065_request.json"))
			.resources(http("TestEnviarMensaje_66")
			.options("/api/friends/list/pending")
			.headers(headers_0),
            http("TestEnviarMensaje_67")
			.options("/api/friends/list")
			.headers(headers_0),
            http("TestEnviarMensaje_68")
			.post("/api/friends/list")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0068_request.json")),
            http("TestEnviarMensaje_69")
			.post("/api/friends/list/pending")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0069_request.json")),
            http("TestEnviarMensaje_70")
			.options("/api/friends/findNearest")
			.headers(headers_0),
            http("TestEnviarMensaje_71")
			.options("/api/friends/findNearest")
			.headers(headers_0),
            http("TestEnviarMensaje_72")
			.options("/api/friends/findNearest")
			.headers(headers_0),
            http("TestEnviarMensaje_73")
			.options("/api/friends/findNearest")
			.headers(headers_0),
            http("TestEnviarMensaje_74")
			.options("/api/friends/findNearest")
			.headers(headers_0),
            http("TestEnviarMensaje_75")
			.post("/api/friends/findNearest")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0075_request.json")),
            http("TestEnviarMensaje_76")
			.post("/api/friends/findNearest")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0076_request.json")),
            http("TestEnviarMensaje_77")
			.post("/api/friends/findNearest")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0077_request.json")),
            http("TestEnviarMensaje_78")
			.post("/api/friends/findNearest")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0078_request.json")),
            http("TestEnviarMensaje_79")
			.post("/api/friends/findNearest")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0079_request.json"))))
		.pause(1)
		.exec(http("TestEnviarMensaje_80")
			.options("/api/msg/list")
			.headers(headers_0)
			.resources(http("TestEnviarMensaje_81")
			.post("/api/msg/list")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0081_request.json"))))
		.pause(2)
		.exec(http("TestEnviarMensaje_82")
			.post("/api/friends/list")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0082_request.json"))
			.resources(http("TestEnviarMensaje_83")
			.post("/api/friends/list/pending")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0083_request.json")),
            http("TestEnviarMensaje_84")
			.post("/api/msg/list")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0084_request.json")),
            http("TestEnviarMensaje_85")
			.post("/api/friends/findNearest")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0085_request.json")),
            http("TestEnviarMensaje_86")
			.post("/api/friends/findNearest")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0086_request.json")),
            http("TestEnviarMensaje_87")
			.post("/api/friends/findNearest")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0087_request.json")),
            http("TestEnviarMensaje_88")
			.post("/api/friends/findNearest")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0088_request.json")),
            http("TestEnviarMensaje_89")
			.post("/api/friends/findNearest")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0089_request.json"))))
		.pause(2)
		.exec(http("TestEnviarMensaje_90")
			.options("/api/msg/list")
			.headers(headers_0)
			.resources(http("TestEnviarMensaje_91")
			.post("/api/msg/list")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0091_request.json")),
            http("TestEnviarMensaje_92")
			.options("/api/msg/add")
			.headers(headers_0),
            http("TestEnviarMensaje_93")
			.get("http://titanium17-0-es.url.trendmicro.com:80/T/128/RXh30UY_K0DQUekMOrfu_xk4CqzKx4-SXIN_XrtC4vukNsGXvgfMi9VoaYglvr_fc1ZBHRzTtzZrPJ64-iia_2u_kkgp6spcnWSHxhYk7EyengqoVxecLwETaTDPwTfn")
			.headers(headers_93)))
		.pause(1)
		.exec(http("TestEnviarMensaje_94")
			.options("/api/friends/list")
			.headers(headers_0)
			.resources(http("TestEnviarMensaje_95")
			.options("/api/friends/list/pending")
			.headers(headers_0),
            http("TestEnviarMensaje_96")
			.post("/api/friends/list/pending")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0096_request.json")),
            http("TestEnviarMensaje_97")
			.post("/api/friends/list")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0097_request.json")),
            http("TestEnviarMensaje_98")
			.options("/api/friends/findNearest")
			.headers(headers_0),
            http("TestEnviarMensaje_99")
			.options("/api/friends/findNearest")
			.headers(headers_0),
            http("TestEnviarMensaje_100")
			.options("/api/friends/findNearest")
			.headers(headers_0),
            http("TestEnviarMensaje_101")
			.options("/api/friends/findNearest")
			.headers(headers_0),
            http("TestEnviarMensaje_102")
			.options("/api/friends/findNearest")
			.headers(headers_0),
            http("TestEnviarMensaje_103")
			.post("/api/friends/findNearest")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0103_request.json")),
            http("TestEnviarMensaje_104")
			.post("/api/friends/findNearest")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0104_request.json")),
            http("TestEnviarMensaje_105")
			.post("/api/friends/findNearest")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0105_request.json")),
            http("TestEnviarMensaje_106")
			.post("/api/friends/findNearest")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0106_request.json")),
            http("TestEnviarMensaje_107")
			.post("/api/friends/findNearest")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0107_request.json"))))
		.pause(1)
		.exec(http("TestEnviarMensaje_108")
			.post("/api/msg/list")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0108_request.json")))
		.pause(2)
		.exec(http("TestEnviarMensaje_109")
			.options("/api/msg/list")
			.headers(headers_0)
			.resources(http("TestEnviarMensaje_110")
			.post("/api/msg/list")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0110_request.json")),
            http("TestEnviarMensaje_111")
			.post("/api/friends/list/pending")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0111_request.json")),
            http("TestEnviarMensaje_112")
			.post("/api/friends/list")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0112_request.json")),
            http("TestEnviarMensaje_113")
			.post("/api/friends/findNearest")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0113_request.json")),
            http("TestEnviarMensaje_114")
			.post("/api/friends/findNearest")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0114_request.json")),
            http("TestEnviarMensaje_115")
			.post("/api/friends/findNearest")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0115_request.json")),
            http("TestEnviarMensaje_116")
			.post("/api/friends/findNearest")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0116_request.json")),
            http("TestEnviarMensaje_117")
			.post("/api/friends/findNearest")
			.headers(headers_4)
			.body(RawFileBody("computerdatabase/testenviarmensaje/0117_request.json"))))

	setUp(scn.inject(constantUsersPerSec(2) during (60 seconds) randomized)).protocols(httpProtocol)
}