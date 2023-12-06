import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc)
let dateFormat;
let getYear;
let setYear;
let getMonth;
let setMonth;
let getWeek;
let setWeek;
let dayjsMixins = {
       methods: {
             async switchCase (ts) {
              try {
                     switch (ts){

                            //-----------------DATE--------------------
                            case 0:
                                   dateFormat =  dayjs(ts).utc().format('YYYY/MM/DD');// '2019/10/15' UTC
                                   console.log('dateFormat', dateFormat);
                                   break;
                                   //-----------------  YEAR--------------------
                                   case 1:
                                          getYear = dayjs(ts).utc().year(); // gets current year
                                          console.log('getYear', getYear);
                                          break;
                                          
                                          case 2:
                                                 setYear = dayjs().utc().year(ts); // returns new dayjs object 
                                                 console.log('setYear', setYear);
                                                 break;
                                                 //--------------------MONTH----------------------
                                                 case 3: 
                                                 getMonth = dayjs(ts).utc().month(); // gets current month
                                                 console.log('getMonth', getMonth);
                                                 break;
                                                 case 4:
                                                        setMonth=  dayjs().utc().month(ts); // returns new dayjs object (months begin at 0)
                                                        console.log('setMonth', setMonth);
                                                        break;
                                                        
                                                        //------------------WEEK--------------------
                                                        case 5:
                                                               getWeek = dayjs(ts).utc().week(); // ex : if ts is '2018-06-27' returns 26
                                                               console.log('getWeek', getWeek);
                                                               break;
                                                               
                                                               case 6:
                                                                      setWeek = dayjs().utc().week(ts); //returns new dayjs object
                                                                      console.log('setWeek', setWeek);
                                                                      break;
                                                               }
                                                               }catch(e){
                                                                      console.error(e)
                                                               }
                                                        }
                            },
                     };
export default dayjsMixins
                     
