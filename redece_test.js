const rslt_list = [
  {charge_division: "rapidity",location_id: 335,name: "1동 1층",full_name: "김검증_대충 좋은 아파트_1동 1층",install_date: "2024-01-02",},
  {charge_division: "slow",location_id: 337,name: "1동 지하 1층",full_name: "김검증_대충 좋은 아파트_1동 지하 1층",install_date: "2024-03-05",},
  {charge_division: "slow",location_id: 338,name: "2동 지하 1층",full_name: "김검증_대충 좋은 아파트_2동 지하 1층",install_date: "2024-03-02",},
  {charge_division: "rapidity",location_id: 337,name: "1동 지하 1층",full_name: "김검증_대충 좋은 아파트_1동 지하 1층",install_date: "2024-01-02",},
  {charge_division: "slow",location_id: 337,name: "1동 지하 1층",full_name: "김검증_대충 좋은 아파트_1동 지하 1층",install_date: "2024-01-02",},
  {charge_division: "slow",location_id: 337,name: "1동 지하 1층",full_name: "김검증_대충 좋은 아파트_1동 지하 1층",install_date: "2024-01-02",},
  {charge_division: "rapidity",location_id: 337,name: "1동 지하 1층",full_name: "김검증_대충 좋은 아파트_1동 지하 1층",install_date: "2024-01-26",},
  {charge_division: "slow",location_id: 337,name: "1동 지하 1층",full_name: "김검증_대충 좋은 아파트_1동 지하 1층",install_date: "2024-01-26",},
  {charge_division: "slow",location_id: 337,name: "1동 지하 1층",full_name: "김검증_대충 좋은 아파트_1동 지하 1층",install_date: "2024-01-26",},
  {charge_division: "rapidity",location_id: 336,name: "2동 1층",full_name: "김검증_대충 좋은 아파트_2동 1층",install_date: "2024-03-02",},
  {charge_division: "rapidity",location_id: 336,name: "2동 1층",full_name: "김검증_대충 좋은 아파트_2동 1층",install_date: "2024-03-02",},
  {charge_division: "wireless",location_id: 336,name: "2동 1층",full_name: "김검증_대충 좋은 아파트_2동 1층",install_date: "2024-03-02",},
  {charge_division: "wireless",location_id: 336,name: "2동 1층",full_name: "김검증_대충 좋은 아파트_2동 1층",install_date: "2024-03-02",},
  {charge_division: "slow",location_id: 336,name: "2동 1층",full_name: "김검증_대충 좋은 아파트_2동 1층",install_date: "2024-03-02",},
  {charge_division: "rapidity",location_id: 336,name: "2동 1층",full_name: "김검증_대충 좋은 아파트_2동 1층",install_date: "2024-03-02",},
  {charge_division: "slow",location_id: 336,name: "2동 1층",full_name: "김검증_대충 좋은 아파트_2동 1층",install_date: "2024-03-02",},
  {charge_division: "wireless",location_id: 336,name: "2동 1층",full_name: "김검증_대충 좋은 아파트_2동 1층",install_date: "2024-03-02",},
];

let code_list = [
  {code: "div_null",code_nm: "2.0.1",},
  {code: "rapidity",code_nm: "급속",},
  {code: "slow",code_nm: "완속",},
  {code: "wireless",code_nm: "무선",},
]

let asset_datas = rslt_list.reduce((res, value) => {
  let obj = {id: value.location_id, name: value.name, full_name: value.full_name};
  let resStr = JSON.stringify(res);
  if(!resStr.includes(obj.id)){
      res.push(obj);
      // asset_datas.push(...res[value.location_id])
  }
  return res;
},[])

code_list = code_list.filter(e => e.code !== 'div_null')

asset_datas.forEach(item=>{
  let data = { location_id : item.id, name: item.name, loc_name: item.full_name };

  let find_data = rslt_list.filter(el => el.location_id == item.id);
  const install_cnt = {}
  code_list.forEach(e => {
    if(!install_cnt[e.code + '_install_count']){
      install_cnt[e.code + '_install_count'] = find_data.filter(el => el.charge_division === e.code).length;
    }
  })
  
  install_cnt['total_install_cnt'] = find_data.length;

  Object.assign(data, install_cnt);



  // if(find_data.length > 0 ){
  //     // find_data.forEach(el =>{
  //         code_list.forEach(code => {
  //             if(el.charge_division == code.code){
  //                 data[code.code + '_install_count'] = el.install_cnt;
  //                 total_install_cnt += el.install_cnt;
  //             }else{
  //                 if(!Object.keys(data).includes(code.code+'_install_count')){
  //                     data[code.code+'_install_count']=0;
  //                     data['use_time_hap']=0;
  //                 }
  //             }
  //         });
  //         data['total_install_count'] = total_install_cnt;
      // });
      rslt_datas_list.push(data);
  // }
});