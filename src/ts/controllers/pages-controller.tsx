import * as React from "react";
import {TestComponent} from "../components/pages/test-component";
import {PagesComponent} from "../components/pages/pages-component";
import {AppController} from "./app-controller";
import {AppApi} from './../api/app-api';

import {PagesStore} from "../stores/pages";
import {App1Component} from "../components/layouts/app1";


export class PagesController extends AppController {
	constructor(data) {
		super(data);
	}

	public index(slug) {
		let helloworld = React.createClass({
			render() {
				return (
					<div>Hello world {slug} 12356</div>
				);
			}
		});

		return this.render(helloworld, {
			data: () => {
				return new Promise((resolve) => {
					AppApi.pages.getPageData(slug).then(() => {

						resolve()
					});
				})
			}
		});
	}

	public page() {

		console.log('page exist');


		return this.render(PagesComponent, {
			data: this.getPagesData,
			layout: App1Component
		});
	}

	private getPagesData = (): Promise<any> => {
		return new Promise((resolve, reject) => {

			// API.getPageData(this.data.params['action']).then((data: PagesStore.Page) => {
			// 	PagesStore.store.setState({
			// 		currentPage: data
			// 	} as PagesStore.State);
			//
			// 	resolve();
			// });
		});
	};

	public page1() {
		return this.render(TestComponent);
	}
}