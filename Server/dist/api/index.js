'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
	var config = _ref.config;

	var api = (0, _express.Router)();
	/**
  * REST API to get the List of metropolitan areas in Asia
  */
	api.get('/', function (req, res) {
		var options = {
			method: 'GET',
			uri: config.wikipedia_baseURL + '/page/mobile-sections/List_of_metropolitan_areas_in_Asia',
			json: true
		};
		(0, _requestPromise2.default)(options).then(function (parseBody) {
			var sections = parseBody.remaining.sections;
			if (sections.length > 1) {
				var sectionText = sections[0].text;
				var HtmlTableToJson = require('html-table-to-json');
				var jsonTables = new HtmlTableToJson(sectionText);
				var result = jsonTables.results && jsonTables.results[0];
				var _json = JSON.parse(JSON.stringify(result).split('"MetroPopulation(2017 est.)[1]":').join('"Population":'));
				res.json(_json);
			}
		}).catch(function (err) {
			console.log(err);
			res.json({ err: err });
		});
	});
	api.get('/details/:name', function (req, res) {
		var query = req.params.name;
		console.log(query);
		var options = {
			method: 'GET',
			uri: config.wikipedia_detailUrl + query,

			json: true
		};
		console.log(options.uri);
		(0, _requestPromise2.default)(options).then(function (parseBody) {
			var sections = parseBody.remaining.sections;
			if (sections.length > 1) {
				var sectionText = sections[0].text;
				var HtmlTableToJson = require('html-table-to-json');
				var jsonTables = new HtmlTableToJson(sectionText);
				var result = jsonTables.results && jsonTables.results[0];
				res.json(json);
			}
		}).catch(function (err) {
			console.log(err);
			res.json({ err: err });
		});
	});

	api.get('/getImages', function (req, res) {

		var convert = require('html-to-json-data');

		var _require = require('html-to-json-data/definitions'),
		    group = _require.group,
		    text = _require.text,
		    href = _require.href;

		var options = {
			method: 'GET',
			uri: config.wikipedia_detailUrl + 'Delhi',
			json: true
		};
		(0, _requestPromise2.default)(options).then(function (parseBody) {
			var sections = parseBody.remaining.sections;
			if (sections.length > 1) {
				var sectionText = sections[0].text;
				var html = sectionText;
				var html1 = '<table class="sortable wikitable"><tbody>\n\t\t\t\t\t<tr bgcolor="#79ff76">\n\t\t\t\t\t\t\t<td align="center"><b>1</b></td>\n\t\t\t\t\t\t\t<td align="center">\n\t\t\t\t\t\t\t\t<a href="/wiki/Greater_Tokyo_Area" title="Greater Tokyo Area">Tokyo</a></td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<figure-inline><a href="/wiki/File:Skyscrapers_of_Shinjuku_2009_January.jpg" class="image"><img src="//upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg/200px-Skyscrapers_of_Shinjuku_2009_January.jpg"\n\t\t\t\t\t\t\t\t\t\tdata-file-width="2560" data-file-height="1364" data-file-type="bitmap" height="107"\n\t\t\t\t\t\t\t\t\t\twidth="200" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg/400px-Skyscrapers_of_Shinjuku_2009_January.jpg\n\t\t\t\t\t\t\t\t\t\t2x,\n\t\t\t\t\t\t\t\t\t\t//upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg/300px-Skyscrapers_of_Shinjuku_2009_January.jpg\n\t\t\t\t\t\t\t\t\t\t1.5x"></a></figure-inline>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td align="center"><span class="flagicon">\n\t\t\t\t\t\t\t\t<figure-inline class="mw-image-border"><span><img src="//upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/23px-Flag_of_Japan.svg.png"\n\t\t\t\t\t\t\t\t\t\t\tdata-file-width="900" data-file-height="600" data-file-type="drawing" height="15"\n\t\t\t\t\t\t\t\t\t\t\twidth="23" srcset="//upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/45px-Flag_of_Japan.svg.png\n\t\t\t\t\t\t\t\t\t\t\t2x,\n\t\t\t\t\t\t\t\t\t\t\t//upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/35px-Flag_of_Japan.svg.png\n\t\t\t\t\t\t\t\t\t\t\t1.5x"></span></figure-inline><span>&nbsp;</span>\n\t\t\t\t\t\t\t</span><a href="/wiki/Japan" title="Japan">Japan</a></td><td align="center"><b>39,800,000</b></td><td\n\t\t\t\t\t\t\talign="center">37,900,000</td><td align="center">38,140,000<span class="mw-ref" id="cite_ref-MA_5-0"><a\n\t\t\t\t\t\t\t\t\thref="#cite_note-MA-5" style="counter-reset: mw-Ref 5;"><span class="mw-reflink-text">[5]</span></a></span></td><td\n\t\t\t\t\t\t\talign="center">37,843,000</td><td align="center">31,714,000<span class="mw-ref" id="cite_ref-Japan_6-0"><a\n\t\t\t\t\t\t\t\t\thref="#cite_note-Japan-6" style="counter-reset: mw-Ref 6;"><span class="mw-reflink-text">[6]</span></a></span></td><td\n\t\t\t\t\t\t\talign="center">2005</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>';
				var _json2 = convert(html, {
					data: group('.wikitable tr', {
						rank: text('td td'),
						population: text('td b'),
						name: text('td a'),
						city_url: href('td a', 'https://en.wikipedia.org')
						//link: href('h3 a', 'https://github.com'),
						//stars: number('a[href$="stargazers"]'),

					})
				});

				var results = _json2.data.slice(1);
				res.json({
					results: results
				});
			}
		}).catch(function (err) {
			console.log(err);
			res.json({
				err: err
			});
		});
	});
	return api;
};
//# sourceMappingURL=index.js.map