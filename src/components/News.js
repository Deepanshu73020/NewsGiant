import React, { Component } from 'react'
import NewsItems from './NewsItems'
import PropTypes from 'prop-types'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 9,
        category: "general"
    }
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string
    }
    async componentDidMount() {
        this.updateNews();

        // This code was used to update the components without using any functional components 

        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6af0b588eb2c44d5ba76d648a628e504&page=1&pageSize=${this.props.pageSize}`;
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData);
        // this.setState({ articles:parsedData.articles,totalResults:parsedData.totalResults })

    }
    Capitalize = (s) => {
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    constructor(props) {
        super(props);
        console.log("Contructor called");
        this.state = {
            articles: [],
            page: 1,
            totalResults:0,
        }
        document.title = `${this.Capitalize(this.props.category)} - NewsGiant`
    }
    async updateNews() {
        this.setState({loading: true});
        this.props.setProgress(30);
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=6af0b588eb2c44d5ba76d648a628e504&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.props.setProgress(50);
        this.setState({
            articles: parsedData.articles,
            totalResults:parsedData.totalResults,
            loading: false
        })
        this.props.setProgress(100);
    }
    // To add buttons we can use this code

    // handlePreviousClick = async () => {
    //     this.setState({ page: this.state.page - 1 })
    //     this.updateNews()
    //     console.log('previous button pressed')
        // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=6af0b588eb2c44d5ba76d648a628e504&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData);
        // this.setState({
            // page: this.state.page - 1,
        //     articles: parsedData.articles
        // })
    // }
    // handleNextClick = async () => {
    //     this.setState({ page: this.state.page + 1 })
    //     this.updateNews()
    //     console.log('next button pressed');
        // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=6af0b588eb2c44d5ba76d648a628e504&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData);
        // this.setState({
        //     page: this.state.page + 1,
        //     articles: parsedData.articles
        // })
    // }
    fetchMoreData=async ()=>{
        this.setState({page:this.state.page+1});
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=6af0b588eb2c44d5ba76d648a628e504&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(data);
        console.log(parsedData);
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults:parsedData.totalResults,
        })
    }

    render() {
        return (
            <div className="container my-3 " >
                <h2  className="text-center" style={{marginTop:'80px'}}>NewsGiant - Top {this.Capitalize(this.props.category)} Headlines</h2>

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length <= this.state.totalResults}
                    loader={<Spinner/>}
                >

                    <div className="row">
                        {!this.state.loading && this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url} >
                                <NewsItems title={element.title ? element.title.slice(0, 114) : ""} description={element.description ? element.description.slice(0, 114) : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.jpg"} newsUrl={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>

                </InfiniteScroll>

                {/* To add buttons we can use this code */}

                {/* <div className="container d-flex justify-content-between">
                    <button type="button" className="btn btn-success" disabled={this.state.page <= 1}
                        onClick={this.handlePreviousClick}> &larr; Previous </button>
                    <button type="button" className="btn btn-success" disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))} onClick={this.handleNextClick}> Next &rarr;</button>
                </div> */}

            </div>
        )
    }
}
export default News
