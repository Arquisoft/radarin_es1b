package computerdatabase

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class LoginLogout extends Simulation {

	val httpProtocol = http
		.baseUrl("https://radarines1brestapi.herokuapp.com")
		.inferHtmlResources(BlackList(""".*\.js""", """.*\.css""", """.*\.gif""", """.*\.jpeg""", """.*\.jpg""", """.*\.ico""", """.*\.woff""", """.*\.woff2""", """.*\.(t|o)tf""", """.*\.png""", """.*detectportal\.firefox\.com.*"""), WhiteList())
		.acceptHeader("*/*")
		.userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:76.0) Gecko/20100101 Firefox/76.0")

	val headers_0 = Map(
		"Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
		"Accept-Encoding" -> "gzip, deflate",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3",
		"If-Modified-Since" -> "Sun, 02 May 2021 20:31:47 GMT",
		"If-None-Match" -> """W/"cde-1792ec7a738"""",
		"Upgrade-Insecure-Requests" -> "1")

	val headers_1 = Map(
		"Accept" -> "image/webp,*/*",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3")

	val headers_2 = Map(
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

	val headers_11 = Map("User-Agent" -> "Titanium;17.0.0;1181;;92b8dfde-c088-4e5e-9456-2ce82298f3f3;iCRCHdler2.83.1021")

	val headers_16 = Map(
		"Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3",
		"If-Modified-Since" -> "Sat, 26 Oct 1985 08:15:00 GMT",
		"If-None-Match" -> """W/"4f746-7438674ba0"""",
		"Upgrade-Insecure-Requests" -> "1")

	val headers_24 = Map(
		"Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3",
		"Upgrade-Insecure-Requests" -> "1")

	val headers_25 = Map(
		"Proxy-Connection" -> "Keep-Alive",
		"User-Agent" -> "TMUFE",
		"X-TM-UF-INFO" -> "448/Uj3tcG7ArMEBOMJxxnpNECS-t-gCit1JlmZj4jges7FdsJPPWiaMC7Frn0gbXWW2ZkJOVLwXnn0fQbdRfDO1jd2dqfNcQP0j9OSlo6XEfl-CtEB9zcg5ZHetQcxXx14cjP3laSf0ookv0hOza0RqdOgebkJ49-PrJ7hll0SOh6_bxVTpe0dllpJytQpUpCk6othXrlp8y_lcMc6dO5GMMFnu906olEDSassPEu6dm7jVYVvJjvDHGor4CNAu4veoX_mK7u0eMBWCNm6hGoQpmmtLOrEaeP4gBq08ydfBc7om4GKQdbU9Ig-_UwJTfEYk95znKNnZWo7teITD-h2bUSnsMZa-xOlxOjgsletyKANATLpiLa9ZinTNSkRgp1DKIQhL14jFyuTP-fMOA7cBwk3q4egStAMFZ1gmrX_vzGKRBUiHh3foDPfzXMCyMEUr")

	val headers_40 = Map(
		"Accept" -> "application/n-quads,application/trig;q=0.95,application/ld+json;q=0.9,application/n-triples;q=0.8,*/*;q=0.1",
		"Accept-Encoding" -> "gzip, deflate, br",
		"Accept-Language" -> "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3",
		"Origin" -> "http://radarines1bwebapp.herokuapp.com")

    val uri1 = "http://radarines1bwebapp.herokuapp.com"
    val uri2 = "https://uo271288.solidcommunity.net/profile/card"
    val uri4 = "http://titanium17-0-es.url.trendmicro.com/T"
    val uri5 = "https://tms17.icrc.trendmicro.com/ss/q"
    val uri6 = "https://solidcommunity.net"
    val uri7 = "https://solid.mit.edu/assets/img/solid-logo.svg"

	val scn = scenario("LoginLogout")
		.exec(http("LoginLogout_0")
			.get(uri1 + "/")
			.headers(headers_0)
			.resources(http("LoginLogout_1")
			.get(uri7)
			.headers(headers_1),
            http("LoginLogout_2")
			.options("/api/users/status/update")
			.headers(headers_2),
            http("LoginLogout_3")
			.options("/api/users/search/ban")
			.headers(headers_2),
            http("LoginLogout_4")
			.options("/api/users/search/admin")
			.headers(headers_2),
            http("LoginLogout_5")
			.post("/api/users/search/admin")
			.headers(headers_5),
            http("LoginLogout_6")
			.post("/api/users/search/ban")
			.headers(headers_5)))
		.pause(5)
		.exec(http("LoginLogout_7")
			.options("/api/friends/list/pending")
			.headers(headers_2)
			.resources(http("LoginLogout_8")
			.options("/api/friends/list")
			.headers(headers_2),
            http("LoginLogout_9")
			.post("/api/friends/list/pending")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/loginlogout/0009_request.json")),
            http("LoginLogout_10")
			.post("/api/friends/list")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/loginlogout/0010_request.json")),
            http("LoginLogout_11")
			.get(uri5 + "/?LCRC=9C4E654146B6CBFA4E9DFE0CD913B3B85A0753D5E20A5BA903B68F53C506AD69")
			.headers(headers_11)))
		.pause(3)
		.exec(http("LoginLogout_12")
			.get(uri5 + "/?BF=2124200795&LCRC=AB795571F586FB4A75ADCE3CC921F9D2&")
			.headers(headers_11)
			.resources(http("LoginLogout_13")
			.get(uri5 + "/?BF=2124200795&LCRC=AB795571F586FB4A75ADCE3CA6275E15&")
			.headers(headers_11)))
		.pause(1)
		.exec(http("LoginLogout_14")
			.post("/api/friends/list/pending")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/loginlogout/0014_request.json"))
			.resources(http("LoginLogout_15")
			.post("/api/friends/list")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/loginlogout/0015_request.json")),
            http("LoginLogout_16")
			.get(uri6 + "/common/popup.html")
			.headers(headers_16)))
		.pause(9)
		.exec(http("LoginLogout_17")
			.options("/api/friends/list")
			.headers(headers_2)
			.resources(http("LoginLogout_18")
			.options("/api/friends/list/pending")
			.headers(headers_2),
            http("LoginLogout_19")
			.options("/api/friends/list")
			.headers(headers_2),
            http("LoginLogout_20")
			.post("/api/friends/list/pending")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/loginlogout/0020_request.json")),
            http("LoginLogout_21")
			.post("/api/friends/list")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/loginlogout/0021_request.json")),
            http("LoginLogout_22")
			.post("/api/friends/list")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/loginlogout/0022_request.json")),
            http("LoginLogout_23")
			.options("/api/friends/list/pending")
			.headers(headers_2),
            http("LoginLogout_24")
			.get(uri6 + "/authorize?scope=openid&client_id=f52b76e16d304ab1723760cacaeab2cf&response_type=id_token%20token&request=eyJhbGciOiJub25lIn0.eyJyZWRpcmVjdF91cmkiOiJodHRwczovL3NvbGlkY29tbXVuaXR5Lm5ldC9jb21tb24vcG9wdXAuaHRtbCIsImRpc3BsYXkiOiJwYWdlIiwibm9uY2UiOiIyNHlMWEtWNXBxb2plY0N0WU5rcVhzNzBsTloxdERhU2w0eWNkVXpxU2M0Iiwia2V5Ijp7ImFsZyI6IlJTMjU2IiwiZSI6IkFRQUIiLCJleHQiOnRydWUsImtleV9vcHMiOlsidmVyaWZ5Il0sImt0eSI6IlJTQSIsIm4iOiJzSVRXWUlzSjFSazRXc19aZmgxd0VLOVd6U25nUng3dG53TlFDN0I5dXZRc0RvN3c3ZW5uVTZqdlNaTE5VV1BnTDJBYU82TWpCMjlXV3N0TzAtZkxXV2tJVDlobXBGTEd3Mi1EaFBHV3FiVEUwd0FnZm1JWUoxZ2xxS0NUdmgzQy1Wak9aak15VHMzbUVUSXozYkRDRkNwS3d5T0hTSm1lY2tFZmoycXdSZmpISGt5WFdDNms3eTI1MENWS3Rpd2xjT2dpVjZKWTBGMm9pMXRMZDNUVGttTGZ4SmU0bGx6X0VyeUc1bXZUOXhwY201a1I5VDZqWGRSRExjN3Q1U1lVYlM2MlhfbW1xVXlsOVhxVDFLa2I3RTdTbmt5ZlR0dzI2YjRyZ1A3RV8tbGNQZEhIamRLdDFQMXFjWmU5NzdsWktoTkl2R0dvZ1RjSUJVQ1MxT3FUQVEifX0.&state=f61ZZ2OJ1G_jtjbovJVjxGGqHkmvcJbb08lYr2kY2i8")
			.headers(headers_24),
            http("LoginLogout_25")
			.get("http://titanium17-0-es.url.trendmicro.com:80/T/1324/RXh30UY_K0DQUekMOrfu_w2st-yW9bPOHxDopWJq3fSeJI8OtXzcRFOqtSiBGcM9nWcoUoIs7OegJB64zDPvSt-lLY6FF7LofsP5R4BFNscNZj_omiNOnFaioL-z9WjWkESH2imCNsJ3NX2ySDOpVQsjsZEw0tek20KjnJXWjFaYH65oRAIFP0j8_pvLMi2bwvdw9QBLa4lb_Rds4gWj1sORqEfddsKZQGjwJs_VYYijuSZ_-yJMSsYemimJvt4GV93ZSJHM335FEsdlh8duqyA7pdXagGyS0R60IStY6O-wiM4h3JYRZFKvk1p9EZAnfUENq0AOWbyCHRvrDPdFrSc-I6DITg2BsOBcKBFErHifUoZkpXddbp14NcsuGaKMG8AnQjeYbf0xPW7fF307j80d2ZHyUI54Qk8JgZv8OxSiqCM3o4yPGym6zTbLYurs5jusNMJpUWfJbgNX4-_Tdn55VnZgiblHKmDCyFNP6TBnW9LI--izLYY_4HXbstEkXxFbyOAu5umHyRioi0iErMkTM6-pLzgF5hq5F-1ov3cJFeL5GzVRctaipH-5GkkxZmk-XyMo78msWVW7wtI_wdDbUeDkdViFqYIVuyzN87zzaT1kzpWBEKBQrFK-HTyZrzwWd7yV2eKs8YD1bhcUJp8TTqyo5lGkloMfOrvKHfj9mq983G38ofguURTNatWLNkNU6HPxleu162d75H3X26mJUnkEO9uzZDCjEyEGLbZmnGuKLn_es1GPuEi4TVzLpcI3u5-qjPaJ3SdhsGpm641hHxfqNspEETSCe4VZxkAkqZ74FB8-oSfTpfQxwKrchor3hWoe2stw7Jt7MeQ10kczFMZJBkrWQY7tj10QTb8YQtaIlHGJh_b5or0hXtg1s8D8gpkzJF70c0rvXktY83WS-ZjQ2Ws3c8tEfYfYx-4x2CwnVEtHU5oYPDAoo16kGmrfDs-SV8sqr8voO7mJmv7oPKk4NeuYveKL1A8C33mrACu6irzpiupxH_lOdY92RMzi0F_-QweVYDoo2YNixw9x6v5vXAmaeU_4unnidcTd5tgNTm6cCb83fRwAuwsVwaPZpiKmp1uhqxBZ-lOxX8cO2GQLP3-qcxBhcXtOzMXXNMuoHQdx25j3Pf2ovkv8HEbjlSJHzEjlx1SKjUsoQKWZpkcXd_VAxqikM9Z_fXKIfkrh0UfO2LeRoooVmbzR94Hleu98FSGvjIDj9SxoMRj-VCcDk0zqsJQ7aGuxNLnW-Sm5L5MsPhbwMSA5GywMfoCKb977p7InSWvgpiJVmeO0UzSYmcEC-unAuHWqqpc=")
			.headers(headers_25),
            http("LoginLogout_26")
			.post("/api/users/status/update")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/loginlogout/0026_request.json"))
			.check(status.is(503))))
		.pause(1)
		.exec(http("LoginLogout_27")
			.options("/api/friends/list/pending")
			.headers(headers_2)
			.resources(http("LoginLogout_28")
			.options("/api/friends/list")
			.headers(headers_2),
            http("LoginLogout_29")
			.post("/api/friends/list/pending")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/loginlogout/0029_request.json")),
            http("LoginLogout_30")
			.post("/api/friends/list")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/loginlogout/0030_request.json")),
            http("LoginLogout_31")
			.post("/api/friends/list")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/loginlogout/0031_request.json")),
            http("LoginLogout_32")
			.get(uri6 + "/authorize?scope=openid&client_id=f52b76e16d304ab1723760cacaeab2cf&response_type=id_token%20token&request=eyJhbGciOiJub25lIn0.eyJyZWRpcmVjdF91cmkiOiJodHRwczovL3NvbGlkY29tbXVuaXR5Lm5ldC9jb21tb24vcG9wdXAuaHRtbCIsImRpc3BsYXkiOiJwYWdlIiwibm9uY2UiOiJiekdiSGxJT25ycGZEV25VRVhUZHFveXJzM1BjU1h4MmZDRWZ5cE1vWW1FIiwia2V5Ijp7ImFsZyI6IlJTMjU2IiwiZSI6IkFRQUIiLCJleHQiOnRydWUsImtleV9vcHMiOlsidmVyaWZ5Il0sImt0eSI6IlJTQSIsIm4iOiJ0a3hhZmh4MFV2MzFJVERTQWNYSDZIMzAxOFVGYml3NU9FTFpQaEZ5T2xTal8yWmpOLThSXzZEZWVMSGZDdFBqM0E5U1pOSkE5dUVwa3dlNHFhb0ZzdGhDYy1GVGpkbWdRZV9JZjJYZEdIOEs5SU9OeEsyZjlpdW9KajlzeTNiMHdhRmFJeFJRUktOb21OaklDX2VYakhfdTBZNGFrU3czdEZHd3BtZTItUnhFRnFnOWFkLXRTdUdlNkEzZzdaWUJ5b0xwUVpQYXZYSVZZUTV5c1VMaEZraEFkZ2VEcXkxMVNoNzg0LWp5aWsydkkwU0IzSDRyV1ZwWkozbGJzTG1FbjBGTm9scmduUlhjMnMwRmduNUt4eHg2RFgxeEJOX1hhazBxOThSRlFWZEE0VGk2aENseXd0YVBkR0t1aFFWU3IxR1l2WEMxTUdtTGFCUFNTbWNXR1EifX0.&state=fjM-ZapYkp8O3pKPGepWei4ND7_cWQTq6qaEWY-G9DE")
			.headers(headers_24),
            http("LoginLogout_33")
			.post("/api/friends/list/pending")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/loginlogout/0033_request.json")),
            http("LoginLogout_34")
			.get(uri6 + "/common/popup.html")
			.headers(headers_16),
            http("LoginLogout_35")
			.get("http://titanium17-0-es.url.trendmicro.com:80/T/128/RXh30UY_K0DQUekMOrfu_w2st-yW9bPOHxDopWJq3fSeJI8OtXzcRFOqtSiBGcM9nWcoUoIs7OegJB64zDPvSll8O9eYqYcmwIpo7j14oxDPgS94o4Zb27dbidItihRg")
			.headers(headers_25),
            http("LoginLogout_36")
			.options("/api/users/lastTime/update")
			.headers(headers_2),
            http("LoginLogout_37")
			.options("/api/users/status/update")
			.headers(headers_2),
            http("LoginLogout_38")
			.post("/api/users/status/update")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/loginlogout/0038_request.json")),
            http("LoginLogout_39")
			.post("/api/users/lastTime/update")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/loginlogout/0039_request.json")),
            http("LoginLogout_40")
			.get(uri2)
			.headers(headers_40),
            http("LoginLogout_41")
			.options("/api/users/add")
			.headers(headers_2),
            http("LoginLogout_42")
			.post("/api/users/add")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/loginlogout/0042_request.json"))))
		.pause(4)
		.exec(http("LoginLogout_43")
			.options("/api/friends/list")
			.headers(headers_2)
			.resources(http("LoginLogout_44")
			.options("/api/friends/list/pending")
			.headers(headers_2),
            http("LoginLogout_45")
			.post("/api/friends/list")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/loginlogout/0045_request.json")),
            http("LoginLogout_46")
			.post("/api/friends/list/pending")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/loginlogout/0046_request.json")),
            http("LoginLogout_47")
			.options("/api/friends/findNearest")
			.headers(headers_2),
            http("LoginLogout_48")
			.options("/api/friends/findNearest")
			.headers(headers_2),
            http("LoginLogout_49")
			.options("/api/friends/findNearest")
			.headers(headers_2),
            http("LoginLogout_50")
			.options("/api/friends/findNearest")
			.headers(headers_2),
            http("LoginLogout_51")
			.options("/api/friends/findNearest")
			.headers(headers_2),
            http("LoginLogout_52")
			.post("/api/friends/findNearest")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/loginlogout/0052_request.json")),
            http("LoginLogout_53")
			.post("/api/friends/findNearest")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/loginlogout/0053_request.json")),
            http("LoginLogout_54")
			.post("/api/friends/findNearest")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/loginlogout/0054_request.json")),
            http("LoginLogout_55")
			.post("/api/friends/findNearest")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/loginlogout/0055_request.json")),
            http("LoginLogout_56")
			.post("/api/friends/findNearest")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/loginlogout/0056_request.json")),
            http("LoginLogout_57")
			.options("/api/friends/findNearest")
			.headers(headers_2),
            http("LoginLogout_58")
			.post("/api/friends/findNearest")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/loginlogout/0058_request.json"))))
		.pause(4)
		.exec(http("LoginLogout_59")
			.options("/api/friends/list")
			.headers(headers_2)
			.resources(http("LoginLogout_60")
			.options("/api/friends/list/pending")
			.headers(headers_2),
            http("LoginLogout_61")
			.post("/api/friends/list")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/loginlogout/0061_request.json")),
            http("LoginLogout_62")
			.post("/api/friends/list/pending")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/loginlogout/0062_request.json")),
            http("LoginLogout_63")
			.options("/api/friends/findNearest")
			.headers(headers_2),
            http("LoginLogout_64")
			.options("/api/friends/findNearest")
			.headers(headers_2),
            http("LoginLogout_65")
			.options("/api/friends/findNearest")
			.headers(headers_2),
            http("LoginLogout_66")
			.options("/api/friends/findNearest")
			.headers(headers_2),
            http("LoginLogout_67")
			.options("/api/friends/findNearest")
			.headers(headers_2),
            http("LoginLogout_68")
			.post("/api/friends/findNearest")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/loginlogout/0068_request.json")),
            http("LoginLogout_69")
			.post("/api/friends/findNearest")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/loginlogout/0069_request.json")),
            http("LoginLogout_70")
			.post("/api/friends/findNearest")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/loginlogout/0070_request.json")),
            http("LoginLogout_71")
			.post("/api/friends/findNearest")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/loginlogout/0071_request.json")),
            http("LoginLogout_72")
			.post("/api/friends/findNearest")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/loginlogout/0072_request.json"))))
		.pause(4)
		.exec(http("LoginLogout_73")
			.post("/api/friends/list/pending")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/loginlogout/0073_request.json"))
			.resources(http("LoginLogout_74")
			.post("/api/friends/list")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/loginlogout/0074_request.json")),
            http("LoginLogout_75")
			.post("/api/friends/findNearest")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/loginlogout/0075_request.json")),
            http("LoginLogout_76")
			.post("/api/friends/findNearest")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/loginlogout/0076_request.json")),
            http("LoginLogout_77")
			.post("/api/friends/findNearest")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/loginlogout/0077_request.json")),
            http("LoginLogout_78")
			.post("/api/friends/findNearest")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/loginlogout/0078_request.json")),
            http("LoginLogout_79")
			.post("/api/friends/findNearest")
			.headers(headers_5)
			.body(RawFileBody("computerdatabase/loginlogout/0079_request.json"))))
		.pause(2)
		.exec(http("LoginLogout_80")
			.get(uri1 + "/")
			.headers(headers_0)
			.resources(http("LoginLogout_81")
			.options("/api/users/search/ban")
			.headers(headers_2),
            http("LoginLogout_82")
			.options("/api/users/search/admin")
			.headers(headers_2),
            http("LoginLogout_83")
			.options("/api/users/status/update")
			.headers(headers_2),
            http("LoginLogout_84")
			.post("/api/users/search/admin")
			.headers(headers_5),
            http("LoginLogout_85")
			.post("/api/users/search/ban")
			.headers(headers_5),
            http("LoginLogout_86")
			.get(uri7)
			.headers(headers_1)))

	setUp(scn.inject(rampUsers(50) during(60 seconds))).protocols(httpProtocol)
}