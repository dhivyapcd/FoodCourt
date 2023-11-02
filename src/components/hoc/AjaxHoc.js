import React from 'react'
import { getData, postData } from '../../apis';
/** 
 * @author:Dhivya
 * @description:Component Ajax Calls 
 * @param {*} Wrapper 
 * @param {*} input 
 * @param {*} obj 
 * @returns 
 */
const AjaxHOC = (Wrapper, input, obj) => {
    return class extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                meal: {},
                mealDetails: {
                    details: {}
                },
                orderDetails: {
                    cartList: {}
                },
                mealId: ''

            }

        }

        componentDidMount() {
           // this.makeApi(input);

        }

        makeApi = (inputData) => {
          
            let url = (input.isDetailPage) ? `${inputData.url}?_embed=details` : inputData.url
            getData(url)
                .then(res => {
                    if (input.isDetailPage)
                        this.setState({ mealDetails: res.data });
                    else if (input.isOrderPage) {
                       // this.setState({ mealId: this.props?.match.params?.id })
                        this.setState({ orderDetails: res.data });
                    }
                    else
                        this.setState({ meal: res.data });
                })
                .catch(error => {
                    console.log(error);
                });

        }
        postApi = (inputData, Obj1) => {
            postData(inputData.url, Obj1)
                .then(res => {
                    this.state.fields = res.data

                })
                .catch(error => {
                    console.log(error);
                });
        }
        render() {
            return (<Wrapper meal={this.state.meal} mealDetails={this.state.mealDetails} orderDetails={this.state.orderDetails} makeApi={this.makeApi} postApi={this.postApi} mealId={this.state.mealId} />)
        }
    }
}
export default AjaxHOC;