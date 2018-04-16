import React from 'react';

const ContentOfPricelist01=(props)=>{
	const myDate = new Date();
	return (
		<div className="container-fluid content">
		    <div className="row">
		        <div className="col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2">
		            <div className="page-header">
		            <h4 className="text-center">报价单01</h4>
		               <button href="#" type="button" className="btn btn-success back-btn-inline btn-xs" onClick={props.backBtnOnClick}>
		                  <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
		                  返回
		               </button>
			       </div>
			       <div className="row">
			       <div className="col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2 pricelist-table-div">
			       <table className="table table-bordered">
			           <thead>
			           <tr className="active">
				          <th colSpan="4" className="text-center"><h4>耀迪风管报价系统明细</h4></th>
				        </tr>
				      </thead>
				      <tbody>
				      <tr className="active">
				          <th>项目</th>
				          <th>单位</th>
				          <th>参考值</th>
				          <th>备注</th>
				        </tr>
				        <tr>
				          <th scope="row">风量</th>
				          <td>m³/h</td>
				          <td><input data-colname="fengLiang" onChange={props.inputOnMouseLeave} type="number" defaultValue={18000} min="0" className="form-control" required={true}/></td>
				          <td></td>
				        </tr>
				        <tr>
				          <th scope="row">风管长度</th>
				          <td>m</td>
				          <td><input data-colname="fengGuanChangDu" onChange={props.inputOnMouseLeave} type="number" defaultValue="24.00" min="0" className="form-control" required={true}/></td>
				          <td>总管单独算，支管米数为相加总和</td>
				        </tr>
				        <tr>
				          <th scope="row">风管条数</th>
				          <td>个</td>
				          <td><input data-colname="fengGuanTiaoShu" onChange={props.inputOnMouseLeave} type="number" defaultValue="1" min="0" className="form-control" required={true}/></td>
				          <td rowSpan="7"></td>
				        </tr>
				        <tr>
				          <th scope="row">开孔直径</th>
				          <td>mm</td>
				          <td><input data-colname="kaiKongZhiJing" onChange={props.inputOnMouseLeave} type="number" defaultValue="30.00" min="0" className="form-control" required={true}/></td>
				        </tr>
				        <tr>
				          <th scope="row">机外余压</th>
				          <td>Pa</td>
				          <td><input data-colname="jiWaiYuYa" onChange={props.inputOnMouseLeave} type="number" defaultValue="120.00" min="0" className="form-control" required={true}/></td>
				        </tr>
				        <tr>
				          <th scope="row">支撑间隔</th>
				          <td>cm</td>
				          <td><input data-colname="zhiChengJianGe" onChange={props.inputOnMouseLeave} type="number" defaultValue="50" min="0" className="form-control" required={true}/></td>
				        </tr>
				        <tr>
				          <th scope="row">吊带排数</th>
				          <td>个</td>
				          <td><input data-colname="diaoDaiPaiShu" onChange={props.inputOnMouseLeave} type="number" defaultValue="2" min="0" className="form-control" required={true}/></td>
				        </tr>
				        <tr>
				          <th scope="row">支撑单价</th>
				          <td>元</td>
				          <td>100.00</td>
				        </tr>
				        <tr>
				          <th scope="row">无支撑单价</th>
				          <td>元</td>
				          <td>80.00</td>
				         
				        </tr>
				        <tr className="danger">
				          <th scope="row">管内风速</th>
				          <td>m/s</td>
				          <td>8.00</td>
				          <td rowSpan="4">管径取中间值整数</td>
				        </tr>
				        <tr className="danger">
				          <th scope="row">管径</th>
				          <td>mm</td>
				          <td>{props.list.guanJingS8}</td>
				          
				        </tr>
				        <tr className="danger">
				          <th scope="row">管内风速</th>
				          <td>m/s</td>
				          <td>9.00</td>
				          
				        </tr>
				        <tr className="danger">
				          <th scope="row">管径</th>
				          <td>mm</td>
				          <td>{props.list.guanJingS9}</td>
				          
				        </tr>
				        <tr>
				          <th scope="row">门幅</th>
				          <td>m</td>
				          <td>{props.list.menFu}</td>
				          <td></td>
				        </tr>
				        <tr>
				          <th scope="row">表面积</th>
				          <td>㎡</td>
				          <td>{props.list.biaoMianJi}</td>
				          <td>取最大管径计算</td>
				        </tr>
				        <tr>
				          <th scope="row">制作损耗</th>
				          <td>㎡</td>
				          <td>{props.list.zhiZuoSunHao}</td>
				          <td rowSpan="12"></td>
				        </tr>
				        <tr>
				          <th scope="row">出口风速</th>
				          <td>m/s</td>
				          <td><input data-colname="chuKouFengSu" onChange={props.inputOnMouseLeave} type="number" defaultValue="15" min="0" className="form-control" required={true}/></td>
				          
				        </tr>
				        <tr>
				          <th scope="row">面料风管渗透风量</th>
				          <td>m³/h/m</td>
				          <td>{props.list.mianLiaoFengGuanShenTouFengLiang}</td>
				          
				        </tr>
				        <tr>
				          <th scope="row">理论风管渗透风量</th>
				          <td>m³/h/m</td>
				          <td>{props.list.liLunFengGuanShenTouFengLiang}</td>
				          
				        </tr>
				        <tr>
				          <th scope="row">单孔风量</th>
				          <td>m³/h</td>
				          <td>{props.list.danKongFengLiang}</td>
				          
				        </tr>
				        <tr>
				          <th scope="row">单管开孔数量</th>
				          <td>个</td>
				          <td>{props.list.danGuanKaiKongShuLiang}</td>
				          
				        </tr>
				        <tr>
				          <th scope="row">开孔排数</th>
				          <td>排</td>
				          <td><input data-colname="kaiKongPaiShu" onChange={props.inputOnMouseLeave} type="number" defaultValue="2" min="0" className="form-control" required={true}/></td>
				          
				        </tr>
				        <tr>
				          <th scope="row">单管开孔间隔</th>
				          <td>cm</td>
				          <td>{props.list.danGuanKaiKongJianGe}</td>
				          
				        </tr>
				        <tr>
				          <th scope="row">单管的吊带个数</th>
				          <td>个</td>
				          <td>{props.list.danGuanDeDiaoDaiGeShu}</td>
				          
				        </tr>
				        <tr>
				          <th scope="row">单管支撑数量</th>
				          <td>个</td>
				          <td>{props.list.danGuanZhiChengShuLiang}</td>
				          
				        </tr>
				        <tr className="success">
				          <th scope="row">支撑报价</th>
				          <td>元</td>
				          <td>{props.list.zhiChengBaoJia}</td>
				          
				        </tr>
				        <tr className="success">
				          <th scope="row">无支撑报价</th>
				          <td>元</td>
				          <td>{props.list.wuZhiChengBaoJia}</td>
				          
				        </tr>
				        <tr>
				          <th colSpan="4" className="text-right">{myDate.getFullYear()+"年"+(myDate.getMonth()+1)+"月"+myDate.getDate()+"日"}</th>
				          
				        </tr>
				      </tbody>
			       </table>
			       </div>
			       </div>
		        </div>
		    </div>
		</div>
		);
}
const ContentOfIndexPage=(props)=>{
	return (
		<div className="container-fluid content">
			<div className="row">
			    <div className="col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2">
			       <div className="page-header">
			           <h3 className="inline-block">风管报价</h3>
			       </div>
			       <div className="row placeholders">
			           <div className="col-xs-6 col-sm-3 placeholder">
			               <button href="#" type="button" className="btn btn-info color-block" onClick={props.pricelistBtnOnClick} pricelist="list01">
			                   <span className="glyphicon glyphicon-list-alt" aria-hidden="true"></span>
			                   报价单01
			               </button>
			           </div>
			           <div className="col-xs-6 col-sm-3 placeholder">
			               <button href="#" type="button" className="btn btn-danger color-block" pricelist="list02">
			                   <span className="glyphicon glyphicon-list-alt" aria-hidden="true"></span>
			                   报价单02
			               </button>
			           </div>
			           <div className="col-xs-6 col-sm-3 placeholder">
			               <button href="#" type="button" className="btn btn-success color-block" pricelist="list03">
			                   <span className="glyphicon glyphicon-list-alt" aria-hidden="true"></span>
			                   报价单03
			               </button>
			           </div>
			       </div>
			    </div>
			</div>
		</div>
		);
}
const Content=(props)=>{
	if(props.currentPage==='index'){
		return (<ContentOfIndexPage pricelistBtnOnClick={props.pricelistBtnOnClick}/>);
	}else if(props.currentPage==='list01'){
		return (<ContentOfPricelist01 
		              backBtnOnClick={props.backBtnOnClick} 
		              inputOnMouseLeave={props.list01InputOnMouseLeave}
		              list={props.list01}
		              />
		              );
	}
}

export default Content;