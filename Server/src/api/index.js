import { Router } from 'express';
import request from 'request-promise';

export default ({ config }) => {
	let api = Router();
	/**
	 * REST API to get the List of metropolitan areas in Asia
	 */
	api.get('/', (req, res) => {
		let options = {
			method: 'GET',
			uri: config.wikipedia_baseURL + '/page/mobile-sections/List_of_metropolitan_areas_in_Asia',
			json: true
		};
		request(options)
			.then((parseBody) => {
				const sections = parseBody.remaining.sections;
				if (sections.length > 1) {
					const sectionText = sections[0].text;
					const HtmlTableToJson = require('html-table-to-json');
					const jsonTables = new HtmlTableToJson(sectionText);
					const result = jsonTables.results && jsonTables.results[0];
					const convert = require('html-to-json-data');
					const {
						group,
						href
					} = require('html-to-json-data/definitions');
                    let imageData = convert(sectionText, {
						data: group('.wikitable tr', {
							city_url: href('td a', config.wikipedia),
						}),
					});
					imageData = imageData.data.slice(1);
                    let resultData = [];
					result.forEach((element, index) => {
						let obj ={};
						obj.Rank = element.Rank;
						obj.Name = element.Area;
						obj.Population = element["MetroPopulation(2017 est.)[1]"];
						obj.Country = element.Country;
						obj.City_Link = imageData[index].city_url[0]
						obj.City_Image = imageData[index].city_url[1].split(config.wikipedia_wiki).join(config.wikipedia_asia_media)
						obj.Country_Link = imageData[index].city_url[2];
						resultData.push(obj);
					});
					//console.log(JSON.stringify(imageData))
					res.json(resultData
					);
				}
			})
			.catch((err) => {
				console.log(err);
				res.json({
					err: err
				});
			});

	});

	api.get('/details/:cityName', (req,res) => {
		const  query =  req.params.cityName;
		let options = {
			method: 'GET',
			uri: config.wikipedia_baseURL + '/page/summary/' + query,
			json: true
		};
		request(options)
			.then((data) => {
				let result = data.extract
				res.json({results:result})
			})
			.catch((err) => {
				console.log(err);
				res.json({
					err: err
				});
			});
		
	})
	return api;
}