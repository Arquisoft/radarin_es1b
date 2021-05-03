package computerdatabase

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class TestMeet extends Simulation {

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

	val headers_2 = Map(
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3",
		"Content-Type" -> "application/json",
		"Origin" -> "http://radarines1bwebapp.herokuapp.com")

	val headers_21 = Map(
		"Accept" -> "image/webp,*/*",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3",
		"Cache-Control" -> "max-age=0",
		"If-None-Match" -> """"87bed834d18246bcac4472a9f8f6d05d"""")

	val headers_22 = Map(
		"Accept" -> "image/webp,*/*",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3")

	val headers_40 = Map(
		"Proxy-Connection" -> "Keep-Alive",
		"User-Agent" -> "TMUFE",
		"X-TM-UF-INFO" -> "440/Uj3tcG7ArMEBOMJxxnpNECS-t-gCit1JlmZj4jges7FdsJPPWiaMC7Frn0gbXWW2ZkJOVLwXnn0fQbdRfDO1jd2dqfNcQP0j9OSlo6XEfl-CtEB9zcg5ZHetQcxXx14cjP3laSf0ookv0hOza0RqdOgebkJ49-PrJ7hll0SOh6_bxVTpe0dllpJytQpUpCk6othXrlp8y_lcMc6dO5GMMFnu906olEDSassPEu6dm7jVYVvJjvDHGor4CNAu4veoX_mK7u0eMBWCNm6hGoQpmmtLOrEaeP4gGbveHuCmGi5nlaaJuCXENNiRduWO4_qCi7ueG_C2GCV2G3C6TKJwkhuEWayp3jv8oAx3MDPJQMDp1xCQaoQ5ujaGdnKpZM_od7fHaCDHMySLggdxBSrzooOmgO-kvbymk1XyrtJQuNKZQgNgTBWAwQ==")

	val headers_42 = Map(
		"Accept" -> "image/webp,*/*",
		"Accept-Encoding" -> "gzip, deflate",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3")

	val headers_55 = Map(
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3",
		"Origin" -> "http://radarines1bwebapp.herokuapp.com")

	val headers_77 = Map("User-Agent" -> "Titanium;17.0.0;1181;;92b8dfde-c088-4e5e-9456-2ce82298f3f3;iCRCHdler2.83.1021")

    val uri1 = "https://maps.googleapis.com/maps/api/geocode/json"
    val uri2 = "http://radarines1bwebapp.herokuapp.com/static/media"
    val uri3 = "https://a.tile.openstreetmap.org/10/492/375.png"
    val uri5 = "http://titanium17-0-es.url.trendmicro.com/T"
    val uri6 = "https://imgur.com/lGHY75A.png"
    val uri7 = "https://tms17.icrc.trendmicro.com/ss/q"

	val scn = scenario("TestMeet")
		.exec(http("TestMeet_0")
			.options("/api/friends/list/pending")
			.headers(headers_0)
			.resources(http("TestMeet_1")
			.options("/api/friends/list")
			.headers(headers_0),
            http("TestMeet_2")
			.post("/api/friends/list")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0002_request.json")),
            http("TestMeet_3")
			.options("/api/friends/findNearest")
			.headers(headers_0),
            http("TestMeet_4")
			.post("/api/friends/list/pending")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0004_request.json")),
            http("TestMeet_5")
			.post("/api/friends/findNearest")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0005_request.json")),
            http("TestMeet_6")
			.post("/api/friends/list")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0006_request.json")),
            http("TestMeet_7")
			.options("/api/friends/findNearest")
			.headers(headers_0),
            http("TestMeet_8")
			.post("/api/friends/list/pending")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0008_request.json")),
            http("TestMeet_9")
			.options("/api/friends/findNearest")
			.headers(headers_0),
            http("TestMeet_10")
			.options("/api/friends/findNearest")
			.headers(headers_0),
            http("TestMeet_11")
			.options("/api/friends/findNearest")
			.headers(headers_0),
            http("TestMeet_12")
			.post("/api/friends/findNearest")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0012_request.json")),
            http("TestMeet_13")
			.post("/api/friends/findNearest")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0013_request.json")),
            http("TestMeet_14")
			.post("/api/friends/findNearest")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0014_request.json")),
            http("TestMeet_15")
			.post("/api/friends/findNearest")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0015_request.json")),
            http("TestMeet_16")
			.post("/api/friends/findNearest")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0016_request.json")),
            http("TestMeet_17")
			.post("/api/friends/findNearest")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0017_request.json")),
            http("TestMeet_18")
			.post("/api/friends/findNearest")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0018_request.json")),
            http("TestMeet_19")
			.post("/api/friends/findNearest")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0019_request.json")),
            http("TestMeet_20")
			.post("/api/friends/findNearest")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0020_request.json"))))
		.pause(3)
		.exec(http("TestMeet_21")
			.get(uri3)
			.headers(headers_21)
			.resources(http("TestMeet_22")
			.get(uri6)
			.headers(headers_22),
            http("TestMeet_23")
			.options("/api/friends/list")
			.headers(headers_0),
            http("TestMeet_24")
			.post("/api/friends/list/pending")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0024_request.json")),
            http("TestMeet_25")
			.post("/api/friends/list")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0025_request.json")),
            http("TestMeet_26")
			.options("/api/friends/findNearest")
			.headers(headers_0),
            http("TestMeet_27")
			.options("/api/friends/findNearest")
			.headers(headers_0),
            http("TestMeet_28")
			.options("/api/friends/findNearest")
			.headers(headers_0),
            http("TestMeet_29")
			.options("/api/friends/findNearest")
			.headers(headers_0),
            http("TestMeet_30")
			.options("/api/friends/findNearest")
			.headers(headers_0),
            http("TestMeet_31")
			.post("/api/friends/findNearest")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0031_request.json")),
            http("TestMeet_32")
			.post("/api/friends/findNearest")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0032_request.json")),
            http("TestMeet_33")
			.post("/api/friends/findNearest")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0033_request.json")),
            http("TestMeet_34")
			.post("/api/friends/findNearest")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0034_request.json")),
            http("TestMeet_35")
			.post("/api/friends/findNearest")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0035_request.json"))))
		.pause(1)
		.exec(http("TestMeet_36")
			.options("/api/meets/find")
			.headers(headers_0)
			.resources(http("TestMeet_37")
			.options("/api/friends/locations")
			.headers(headers_0),
            http("TestMeet_38")
			.post("/api/friends/locations")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0038_request.json")),
            http("TestMeet_39")
			.post("/api/meets/find")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0039_request.json")),
            http("TestMeet_40")
			.get("http://titanium17-0-es.url.trendmicro.com:80/T/128/RXh30UY_K0DQUekMOrfu_xk4CqzKx4-SXIN_XrtC4vuAaQqOwEzit2qWM7ZvWi26RWRom6pGA_io9I0LXuEwZXC1xFDDEhtfetd2yy56ELcPX50pHsDbkF_5PRgcUN65")
			.headers(headers_40),
            http("TestMeet_41")
			.get("http://titanium17-0-es.url.trendmicro.com:80/T/152/RXh30UY_K0DQUekMOrfu_xk4CqzKx4-SXIN_XrtC4vuAaQqOwEzit2qWM7ZvWi26RWRom6pGA_io9I0LXuEwZXC1xFDDEhtfetd2yy56ELdKJCQFoucb5efHtz5dO3rWVYM09Z7WKHeY2jTeZUxveA==")
			.headers(headers_40),
            http("TestMeet_42")
			.get(uri2 + "/meeting.26eca8e5.png")
			.headers(headers_42)))
		.pause(2)
		.exec(http("TestMeet_43")
			.post("/api/friends/locations")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0043_request.json"))
			.resources(http("TestMeet_44")
			.post("/api/meets/find")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0044_request.json")),
            http("TestMeet_45")
			.post("/api/friends/list/pending")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0045_request.json")),
            http("TestMeet_46")
			.post("/api/friends/list")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0046_request.json")),
            http("TestMeet_47")
			.post("/api/friends/findNearest")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0047_request.json")),
            http("TestMeet_48")
			.post("/api/friends/findNearest")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0048_request.json")),
            http("TestMeet_49")
			.post("/api/friends/findNearest")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0049_request.json")),
            http("TestMeet_50")
			.post("/api/friends/findNearest")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0050_request.json")),
            http("TestMeet_51")
			.post("/api/friends/findNearest")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0051_request.json"))))
		.pause(4)
		.exec(http("TestMeet_52")
			.options("/api/meets/find")
			.headers(headers_0)
			.resources(http("TestMeet_53")
			.options("/api/friends/locations")
			.headers(headers_0),
            http("TestMeet_54")
			.post("/api/friends/locations")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0054_request.json")),
            http("TestMeet_55")
			.get(uri1 + "?latlng=43.395069512861355%2C-5.868072509765626&key=AIzaSyC6fKABMEcc3viILCEmzr9Uy7pToGhbVv0&language=en&region=es&location_type=ROOFTOP")
			.headers(headers_55),
            http("TestMeet_56")
			.post("/api/meets/find")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0056_request.json")),
            http("TestMeet_57")
			.options("/api/meets/add")
			.headers(headers_0),
            http("TestMeet_58")
			.post("/api/meets/add")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0058_request.json")),
            http("TestMeet_59")
			.options("/api/friends/list")
			.headers(headers_0),
            http("TestMeet_60")
			.get("http://titanium17-0-es.url.trendmicro.com:80/T/128/RXh30UY_K0DQUekMOrfu_xk4CqzKx4-SXIN_XrtC4vuAaQqOwEzit2qWM7ZvWi26RWRom6pGA_io9I0LXuEwZXC1xFDDEhtfetd2yy56ELehvqhoWGYUJIgJpwLGw-zW")
			.headers(headers_40),
            http("TestMeet_61")
			.options("/api/friends/list/pending")
			.headers(headers_0),
            http("TestMeet_62")
			.post("/api/friends/list")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0062_request.json")),
            http("TestMeet_63")
			.post("/api/friends/list/pending")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0063_request.json")),
            http("TestMeet_64")
			.options("/api/friends/findNearest")
			.headers(headers_0),
            http("TestMeet_65")
			.options("/api/friends/findNearest")
			.headers(headers_0),
            http("TestMeet_66")
			.options("/api/friends/findNearest")
			.headers(headers_0),
            http("TestMeet_67")
			.options("/api/friends/findNearest")
			.headers(headers_0),
            http("TestMeet_68")
			.options("/api/friends/findNearest")
			.headers(headers_0),
            http("TestMeet_69")
			.post("/api/friends/findNearest")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0069_request.json")),
            http("TestMeet_70")
			.post("/api/friends/findNearest")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0070_request.json")),
            http("TestMeet_71")
			.post("/api/friends/findNearest")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0071_request.json")),
            http("TestMeet_72")
			.post("/api/friends/findNearest")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0072_request.json")),
            http("TestMeet_73")
			.post("/api/friends/findNearest")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0073_request.json"))))
		.pause(2)
		.exec(http("TestMeet_74")
			.post("/api/friends/locations")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0074_request.json"))
			.resources(http("TestMeet_75")
			.post("/api/meets/find")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0075_request.json")),
            http("TestMeet_76")
			.get(uri2 + "/ownMeeting.eeaee2ac.png")
			.headers(headers_42)))
		.pause(1)
		.exec(http("TestMeet_77")
			.get(uri7 + "/?LCRC=9C4E654146B6CBFA4E9DFE0CD913B3B85A0753D5E20A5BA903B68F53C506AD69")
			.headers(headers_77))
		.pause(1)
		.exec(http("TestMeet_78")
			.post("/api/friends/list")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0078_request.json"))
			.resources(http("TestMeet_79")
			.post("/api/friends/list/pending")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0079_request.json")),
            http("TestMeet_80")
			.post("/api/friends/findNearest")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0080_request.json")),
            http("TestMeet_81")
			.post("/api/friends/findNearest")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0081_request.json")),
            http("TestMeet_82")
			.post("/api/friends/findNearest")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0082_request.json")),
            http("TestMeet_83")
			.post("/api/friends/findNearest")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0083_request.json")),
            http("TestMeet_84")
			.post("/api/friends/findNearest")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0084_request.json")),
            http("TestMeet_85")
			.options("/api/friends/locations")
			.headers(headers_0),
            http("TestMeet_86")
			.post("/api/friends/locations")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0086_request.json")),
            http("TestMeet_87")
			.options("/api/meets/find")
			.headers(headers_0),
            http("TestMeet_88")
			.post("/api/meets/find")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0088_request.json"))))
		.pause(2)
		.exec(http("TestMeet_89")
			.post("/api/friends/locations")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0089_request.json"))
			.resources(http("TestMeet_90")
			.post("/api/meets/find")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0090_request.json"))))
		.pause(1)
		.exec(http("TestMeet_91")
			.options("/api/friends/list")
			.headers(headers_0)
			.resources(http("TestMeet_92")
			.options("/api/friends/list/pending")
			.headers(headers_0),
            http("TestMeet_93")
			.post("/api/friends/list")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0093_request.json")),
            http("TestMeet_94")
			.post("/api/friends/list/pending")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0094_request.json")),
            http("TestMeet_95")
			.options("/api/friends/findNearest")
			.headers(headers_0),
            http("TestMeet_96")
			.options("/api/friends/findNearest")
			.headers(headers_0),
            http("TestMeet_97")
			.options("/api/friends/findNearest")
			.headers(headers_0),
            http("TestMeet_98")
			.options("/api/friends/findNearest")
			.headers(headers_0),
            http("TestMeet_99")
			.options("/api/friends/findNearest")
			.headers(headers_0),
            http("TestMeet_100")
			.post("/api/friends/findNearest")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0100_request.json")),
            http("TestMeet_101")
			.post("/api/friends/findNearest")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0101_request.json")),
            http("TestMeet_102")
			.post("/api/friends/findNearest")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0102_request.json")),
            http("TestMeet_103")
			.post("/api/friends/findNearest")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0103_request.json")),
            http("TestMeet_104")
			.post("/api/friends/findNearest")
			.headers(headers_2)
			.body(RawFileBody("computerdatabase/testmeet/0104_request.json"))))

	setUp(scn.inject(constantUsersPerSec(2) during (60 seconds) randomized)).protocols(httpProtocol)
}