package computerdatabase

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class TestMap extends Simulation {

	val httpProtocol = http
		.baseUrl("https://radarines1brestapi.herokuapp.com")
		.inferHtmlResources()
		.acceptHeader("image/webp,*/*")
		.userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:76.0) Gecko/20100101 Firefox/76.0")

	val headers_0 = Map(
		"Accept" -> "*/*",
		"User-Agent" -> "Titanium;17.0.0;1181;;92b8dfde-c088-4e5e-9456-2ce82298f3f3;iCRCHdler2.83.1021")

	val headers_1 = Map(
		"Accept" -> "*/*",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3",
		"Content-Type" -> "application/json",
		"Origin" -> "http://radarines1bwebapp.herokuapp.com")

	val headers_3 = Map(
		"Accept" -> "*/*",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3",
		"Access-Control-Request-Headers" -> "content-type",
		"Access-Control-Request-Method" -> "POST",
		"Origin" -> "http://radarines1bwebapp.herokuapp.com")

	val headers_26 = Map(
		"Accept-Encoding" -> "gzip, deflate",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3",
		"If-Modified-Since" -> "Sun, 02 May 2021 20:31:47 GMT",
		"If-None-Match" -> """W/"9189-1792ec7a738"""")

	val headers_29 = Map(
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3")

    val uri1 = "https://c.tile.openstreetmap.org"
    val uri2 = "http://radarines1bwebapp.herokuapp.com/static/media/meeting.26eca8e5.png"
    val uri3 = "https://b.tile.openstreetmap.org"
    val uri4 = "https://a.tile.openstreetmap.org"
    val uri6 = "https://tms17.icrc.trendmicro.com/ss/q"

	val scn = scenario("TestMap")
		.exec(http("TestMap_0")
			.get(uri6 + "/?LCRC=9C4E654146B6CBFA4E9DFE0CD913B3B85A0753D5E20A5BA903B68F53C506AD69")
			.headers(headers_0))
		.pause(1)
		.exec(http("TestMap_1")
			.post("/api/friends/list")
			.headers(headers_1)
			.body(RawFileBody("computerdatabase/testmap/0001_request.json"))
			.resources(http("TestMap_2")
			.post("/api/friends/list/pending")
			.headers(headers_1)
			.body(RawFileBody("computerdatabase/testmap/0002_request.json")),
            http("TestMap_3")
			.options("/api/friends/findNearest")
			.headers(headers_3),
            http("TestMap_4")
			.options("/api/friends/findNearest")
			.headers(headers_3),
            http("TestMap_5")
			.post("/api/friends/findNearest")
			.headers(headers_1)
			.body(RawFileBody("computerdatabase/testmap/0005_request.json")),
            http("TestMap_6")
			.post("/api/friends/findNearest")
			.headers(headers_1)
			.body(RawFileBody("computerdatabase/testmap/0006_request.json")),
            http("TestMap_7")
			.options("/api/friends/findNearest")
			.headers(headers_3),
            http("TestMap_8")
			.options("/api/friends/findNearest")
			.headers(headers_3),
            http("TestMap_9")
			.options("/api/friends/findNearest")
			.headers(headers_3),
            http("TestMap_10")
			.post("/api/friends/findNearest")
			.headers(headers_1)
			.body(RawFileBody("computerdatabase/testmap/0010_request.json")),
            http("TestMap_11")
			.post("/api/friends/findNearest")
			.headers(headers_1)
			.body(RawFileBody("computerdatabase/testmap/0011_request.json")),
            http("TestMap_12")
			.post("/api/friends/findNearest")
			.headers(headers_1)
			.body(RawFileBody("computerdatabase/testmap/0012_request.json"))))
		.pause(4)
		.exec(http("TestMap_13")
			.options("/api/friends/locations")
			.headers(headers_3)
			.resources(http("TestMap_14")
			.options("/api/meets/find")
			.headers(headers_3),
            http("TestMap_15")
			.options("/api/friends/list/pending")
			.headers(headers_3),
            http("TestMap_16")
			.options("/api/friends/list")
			.headers(headers_3),
            http("TestMap_17")
			.post("/api/friends/locations")
			.headers(headers_1)
			.body(RawFileBody("computerdatabase/testmap/0017_request.json")),
            http("TestMap_18")
			.post("/api/friends/list/pending")
			.headers(headers_1)
			.body(RawFileBody("computerdatabase/testmap/0018_request.json")),
            http("TestMap_19")
			.post("/api/friends/list")
			.headers(headers_1)
			.body(RawFileBody("computerdatabase/testmap/0019_request.json")),
            http("TestMap_20")
			.post("/api/meets/find")
			.headers(headers_1)
			.body(RawFileBody("computerdatabase/testmap/0020_request.json")),
            http("TestMap_21")
			.post("/api/friends/findNearest")
			.headers(headers_1)
			.body(RawFileBody("computerdatabase/testmap/0021_request.json")),
            http("TestMap_22")
			.post("/api/friends/findNearest")
			.headers(headers_1)
			.body(RawFileBody("computerdatabase/testmap/0022_request.json")),
            http("TestMap_23")
			.post("/api/friends/findNearest")
			.headers(headers_1)
			.body(RawFileBody("computerdatabase/testmap/0023_request.json")),
            http("TestMap_24")
			.post("/api/friends/findNearest")
			.headers(headers_1)
			.body(RawFileBody("computerdatabase/testmap/0024_request.json")),
            http("TestMap_25")
			.post("/api/friends/findNearest")
			.headers(headers_1)
			.body(RawFileBody("computerdatabase/testmap/0025_request.json")),
            http("TestMap_26")
			.get(uri2)
			.headers(headers_26)))
		.pause(2)
		.exec(http("TestMap_27")
			.post("/api/friends/locations")
			.headers(headers_1)
			.body(RawFileBody("computerdatabase/testmap/0027_request.json"))
			.resources(http("TestMap_28")
			.post("/api/meets/find")
			.headers(headers_1)
			.body(RawFileBody("computerdatabase/testmap/0028_request.json")),
            http("TestMap_29")
			.get(uri3 + "/11/992/749.png")
			.headers(headers_29),
            http("TestMap_30")
			.get(uri3 + "/11/990/748.png")
			.headers(headers_29),
            http("TestMap_31")
			.get(uri1 + "/11/990/749.png")
			.headers(headers_29),
            http("TestMap_32")
			.get(uri3 + "/11/991/750.png")
			.headers(headers_29),
            http("TestMap_33")
			.get(uri1 + "/11/991/748.png")
			.headers(headers_29),
            http("TestMap_34")
			.get(uri3 + "/11/989/749.png")
			.headers(headers_29),
            http("TestMap_35")
			.get(uri4 + "/11/991/749.png")
			.headers(headers_29),
            http("TestMap_36")
			.get(uri4 + "/11/989/748.png")
			.headers(headers_29),
            http("TestMap_37")
			.get(uri3 + "/11/988/750.png")
			.headers(headers_29),
            http("TestMap_38")
			.get(uri3 + "/11/993/748.png")
			.headers(headers_29),
            http("TestMap_39")
			.get(uri4 + "/11/988/749.png")
			.headers(headers_29),
            http("TestMap_40")
			.get(uri1 + "/11/992/750.png")
			.headers(headers_29),
            http("TestMap_41")
			.get(uri1 + "/11/989/750.png")
			.headers(headers_29),
            http("TestMap_42")
			.get(uri4 + "/11/990/750.png")
			.headers(headers_29),
            http("TestMap_43")
			.get(uri1 + "/11/988/748.png")
			.headers(headers_29),
            http("TestMap_44")
			.get(uri4 + "/11/993/750.png")
			.headers(headers_29),
            http("TestMap_45")
			.get(uri1 + "/11/993/749.png")
			.headers(headers_29),
            http("TestMap_46")
			.get(uri4 + "/11/992/748.png")
			.headers(headers_29),
            http("TestMap_47")
			.get(uri4 + "/13/3962/2998.png")
			.headers(headers_29),
            http("TestMap_48")
			.get(uri3 + "/13/3962/2999.png")
			.headers(headers_29),
            http("TestMap_49")
			.get(uri3 + "/13/3963/2998.png")
			.headers(headers_29),
            http("TestMap_50")
			.get(uri1 + "/13/3963/2999.png")
			.headers(headers_29),
            http("TestMap_51")
			.get(uri4 + "/13/3963/2997.png")
			.headers(headers_29),
            http("TestMap_52")
			.get(uri1 + "/13/3964/2998.png")
			.headers(headers_29),
            http("TestMap_53")
			.get(uri4 + "/13/3964/2999.png")
			.headers(headers_29),
            http("TestMap_54")
			.get(uri4 + "/13/3961/2999.png")
			.headers(headers_29),
            http("TestMap_55")
			.get(uri1 + "/13/3962/3000.png")
			.headers(headers_29),
            http("TestMap_56")
			.get(uri1 + "/13/3962/2997.png")
			.headers(headers_29),
            http("TestMap_57")
			.get(uri1 + "/13/3961/2998.png")
			.headers(headers_29),
            http("TestMap_58")
			.get(uri4 + "/13/3963/3000.png")
			.headers(headers_29),
            http("TestMap_59")
			.get(uri3 + "/13/3961/2997.png")
			.headers(headers_29),
            http("TestMap_60")
			.get(uri3 + "/13/3960/2998.png")
			.headers(headers_29),
            http("TestMap_61")
			.get(uri1 + "/13/3965/2997.png")
			.headers(headers_29),
            http("TestMap_62")
			.get(uri1 + "/13/3960/2999.png")
			.headers(headers_29),
            http("TestMap_63")
			.get(uri4 + "/13/3965/2998.png")
			.headers(headers_29),
            http("TestMap_64")
			.get(uri3 + "/13/3964/2997.png")
			.headers(headers_29),
            http("TestMap_65")
			.get(uri1 + "/13/3965/3000.png")
			.headers(headers_29),
            http("TestMap_66")
			.get(uri3 + "/13/3964/3000.png")
			.headers(headers_29),
            http("TestMap_67")
			.get(uri3 + "/13/3961/3000.png")
			.headers(headers_29),
            http("TestMap_68")
			.get(uri4 + "/13/3960/2997.png")
			.headers(headers_29),
            http("TestMap_69")
			.get(uri3 + "/13/3965/2999.png")
			.headers(headers_29),
            http("TestMap_70")
			.get(uri4 + "/13/3960/3000.png")
			.headers(headers_29),
            http("TestMap_71")
			.get(uri4 + "/11/989/751.png")
			.headers(headers_29),
            http("TestMap_72")
			.get(uri3 + "/11/990/751.png")
			.headers(headers_29),
            http("TestMap_73")
			.get(uri1 + "/11/988/751.png")
			.headers(headers_29),
            http("TestMap_74")
			.get(uri1 + "/11/991/751.png")
			.headers(headers_29),
            http("TestMap_75")
			.get(uri4 + "/11/992/751.png")
			.headers(headers_29),
            http("TestMap_76")
			.get(uri3 + "/11/993/751.png")
			.headers(headers_29),
            http("TestMap_77")
			.post("/api/friends/list")
			.headers(headers_1)
			.body(RawFileBody("computerdatabase/testmap/0077_request.json")),
            http("TestMap_78")
			.post("/api/friends/list/pending")
			.headers(headers_1)
			.body(RawFileBody("computerdatabase/testmap/0078_request.json")),
            http("TestMap_79")
			.options("/api/friends/findNearest")
			.headers(headers_3),
            http("TestMap_80")
			.options("/api/friends/findNearest")
			.headers(headers_3),
            http("TestMap_81")
			.options("/api/friends/findNearest")
			.headers(headers_3),
            http("TestMap_82")
			.options("/api/friends/findNearest")
			.headers(headers_3),
            http("TestMap_83")
			.options("/api/friends/findNearest")
			.headers(headers_3),
            http("TestMap_84")
			.post("/api/friends/findNearest")
			.headers(headers_1)
			.body(RawFileBody("computerdatabase/testmap/0084_request.json")),
            http("TestMap_85")
			.post("/api/friends/findNearest")
			.headers(headers_1)
			.body(RawFileBody("computerdatabase/testmap/0085_request.json")),
            http("TestMap_86")
			.post("/api/friends/findNearest")
			.headers(headers_1)
			.body(RawFileBody("computerdatabase/testmap/0086_request.json")),
            http("TestMap_87")
			.post("/api/friends/findNearest")
			.headers(headers_1)
			.body(RawFileBody("computerdatabase/testmap/0087_request.json")),
            http("TestMap_88")
			.post("/api/friends/findNearest")
			.headers(headers_1)
			.body(RawFileBody("computerdatabase/testmap/0088_request.json")),
            http("TestMap_89")
			.options("/api/friends/locations")
			.headers(headers_3),
            http("TestMap_90")
			.options("/api/meets/find")
			.headers(headers_3),
            http("TestMap_91")
			.post("/api/friends/locations")
			.headers(headers_1)
			.body(RawFileBody("computerdatabase/testmap/0091_request.json")),
            http("TestMap_92")
			.post("/api/meets/find")
			.headers(headers_1)
			.body(RawFileBody("computerdatabase/testmap/0092_request.json"))))

	setUp(scn.inject(constantUsersPerSec(2) during (60 seconds) randomized)).protocols(httpProtocol)
}