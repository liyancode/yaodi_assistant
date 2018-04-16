import React from 'react';
import {render} from 'react-dom';

import './3rdpty/bootstrap-3.3.7-dist/css/bootstrap.min.css'
import './css/style.css';

import 'jquery';
import './3rdpty/bootstrap-3.3.7-dist/js/bootstrap.min.js'

import Navbar from './js/componentNavbar.js';
import Content from './js/componentContent.js';
import Footer from './js/componentFooter.js';

// App component
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            currentPage:'index',
            list01:{
            	fengLiang:18000.00,
            	fengGuanChangDu:24.00,
            	fengGuanTiaoShu:1,
            	kaiKongZhiJing:30.00,
            	jiWaiYuYa:120.00,
            	zhiChengJianGe:50,
            	diaoDaiPaiShu:2,
            	zhiChengDanJia:100.00,
            	wuZhiChengDanJia:80.00,
            	guanNeiFengSu8:8.00,
            	guanJingS8:894.43,
            	guanNeiFengSu9:9.00,
            	guanJingS9:848.53,
            	menFu:2.93,
            	biaoMianJi:79.16,
            	zhiZuoSunHao:87.87,
            	chuKouFengSu:15.00,
            	mianLiaoFengGuanShenTouFengLiang:16.81,
            	liLunFengGuanShenTouFengLiang:40.00,
            	danKongFengLiang:38.15,
            	danGuanKaiKongShuLiang:461.24,
            	kaiKongPaiShu:2,
            	danGuanKaiKongJianGe:10.41,
            	danGuanDeDiaoDaiGeShu:96,
            	danGuanZhiChengShuLiang:48,
            	zhiChengBaoJia:8786.85,
            	wuZhiChengBaoJia:7029.48
            }
        };
        this.handlePricelistBtnOnClick=this.handlePricelistBtnOnClick.bind(this);
        this.handleBackBtnOnClick=this.handleBackBtnOnClick.bind(this);
        this.list01Update=this.list01Update.bind(this);
        this.handleList01InputOnMouseLeave=this.handleList01InputOnMouseLeave.bind(this);
    }
    handlePricelistBtnOnClick(e){
    	const target=e.target;
    	const topage=target.getAttribute("pricelist");
    	this.setState(
            {
                currentPage:topage
            }
        );
    }
    handleBackBtnOnClick(){
        this.setState(
            {
                currentPage:'index'
            }
        );
    }
    list01Update(){
    	let list01=Object.assign({},this.state.list01);
    	list01.guanJingS8=(Math.sqrt(0.2)*2000/list01.fengGuanTiaoShu).toFixed(2);
    	list01.guanJingS9=(Math.sqrt(0.18)*2000/list01.fengGuanTiaoShu).toFixed(2);

    	list01.menFu=((list01.guanJingS8+40)*3.14/1000).toFixed(2);
    	list01.biaoMianJi=((list01.guanJingS8+40)*(3.14*list01.fengGuanChangDu/1000)
    		+(list01.guanJingS8/100*list01.fengGuanTiaoShu)*list01.fengGuanTiaoShu).toFixed(2);
    	list01.zhiZuoSunHao=(list01.biaoMianJi*1.11).toFixed(2);
    	list01.mianLiaoFengGuanShenTouFengLiang=(list01.guanJingS8*3.14/1000*6).toFixed(2);
    	list01.liLunFengGuanShenTouFengLiang=(list01.jiWaiYuYa/120+40).toFixed(2);
    	list01.danKongFengLiang=((list01.kaiKongZhiJing/2)*(list01.kaiKongZhiJing/2)*3.14*3600*list01.chuKouFengSu/1000000).toFixed(2);
    	list01.danGuanKaiKongShuLiang=(((list01.fengLiang/list01.fengGuanTiaoShu)-
    		(list01.mianLiaoFengGuanShenTouFengLiang*list01.fengGuanChangDu/list01.fengGuanTiaoShu))/list01.danKongFengLiang).toFixed(2);
    	list01.danGuanKaiKongJianGe=(list01.fengGuanChangDu/list01.fengGuanTiaoShu/
    	(list01.danGuanKaiKongShuLiang/list01.kaiKongPaiShu)*100).toFixed(2);
    	list01.danGuanDeDiaoDaiGeShu=(list01.fengGuanChangDu/0.5*list01.diaoDaiPaiShu/list01.fengGuanTiaoShu).toFixed(2);
    	list01.danGuanZhiChengShuLiang=(list01.fengGuanChangDu*100/list01.zhiChengJianGe/list01.fengGuanTiaoShu).toFixed(2);
    	list01.zhiChengBaoJia=(list01.zhiZuoSunHao*list01.zhiChengDanJia).toFixed(2);
    	list01.wuZhiChengBaoJia=(list01.zhiZuoSunHao*list01.wuZhiChengDanJia).toFixed(2);

    	this.setState(
            {
                list01:list01
            }
        );
    }
    handleList01InputOnMouseLeave(e){
    	this.list01Update();

    }
    
    render() {
        return (
            <div>
                <Navbar />
                <Content 
                    currentPage={this.state.currentPage} 
                    pricelistBtnOnClick={this.handlePricelistBtnOnClick}
                    backBtnOnClick={this.handleBackBtnOnClick}
                    list01InputOnMouseLeave={this.handleList01InputOnMouseLeave}
                    list01={this.state.list01}
                    />
                <Footer />
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));