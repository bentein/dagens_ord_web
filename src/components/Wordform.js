import React, { Component } from 'react';
import axios from 'axios';
import './Wordform.css';

class Wordform extends Component {
	constructor(props) {
		super(props);
		this.state = {status: ""};
		axios.defaults.crossDomain = true;		
	}

	getWordObject() {
		const form = document.getElementById("wordForm");

		return {
			word:form.word.value,
			pronounciation:form.pronounciation.value,
			type:form.type.value,
			description:form.description.value,
			example:form.example.value,
			date:form.date.value
		}
	}

	clearStatus() {
		this.setState({status: ""});
	}

	onSendWordClick() {
		this.clearStatus();

		var item = this.getWordObject();

		axios.put('https://a71n4w0dwf.execute-api.eu-west-1.amazonaws.com/testing',item)
			.then((resp) => {
				if (resp.status === 200) {
					this.setState({status: "success"});
				}
			})
			.catch((error) => {
				this.setState({status: "failure"});
			});
	}

	render() {
		const successResponse = (
			<div className="status success">
				<div>Ordet ble lagret</div>
			</div>
		);

		const failureResponse = (
			<div className="status failure">
				<div>En feil oppstod</div>
			</div>
		);

		const status = this.state.status;

		return (
			<div className="formWrapper">
				<form id="wordForm" method="">
					<div className="row">Ord: 
						<div className="column"><input type="text" name="word"/></div>
					</div>

					<div className="row">Uttale: 
						<div className="column"><input type="text" name="pronounciation"/></div>
					</div>

					<div className="row">Type: 
						<div className="column"><select name="type">
							<option value="Substantiv">Substantiv</option>
							<option value="Adjektiv">Adjektiv</option>
							<option value="Verb">Verb</option>
						</select></div>
					</div>

					<div className="row">Beskrivelse: 
						<div className="column"><textarea type="text" name="description"/></div>
					</div>

					<div className="row">Eksempel: 
						<div className="column"><textarea type="text" name="example"/></div>
					</div>

					<div className="row">Dato: 
						<div className="column"><input type="text" name="date"/></div>
					</div>
				</form>
			
				<div className="row">
					<button onClick={this.onSendWordClick.bind(this)}>Send nytt ord</button>
				</div>

				<div className="row statusWrapper" onClick={this.clearStatus.bind(this)}>
					{ status === "success"
						? successResponse
						: status === "failure"
							? failureResponse
							: null
					}
				</div>
			</div>
		);
	}
}

export default Wordform;