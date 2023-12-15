import dayjs from 'dayjs';

let dayjsMixins = {
       methods: {
              //-------------------FORMAT--------------------
              dateFormat(ts) {
                return dayjs(ts).format('YYYY/MM/DD');// '2019/10/15'
              },
              //---------------------UNIX TS(seconds)---------------
              unixSecondTs(ts) {
                     return dayjs(ts).unix();//returns number of seconds since unix Epoch of Day.js object
              },
              //-------------------UNIX TS(millisSeconds)--------------------
              unixMilliSecondTs(ts) {
                     return dayjs(ts).valueOf();//returns number of milliseconds since unix Epoch of Day.js object
              },
              //--------------------------YEAR-------------------------------              
              getYear(ts) { 
              return dayjs(ts).year(); // gets current year
              },

              setYear(ts) {
              return dayjs().year(ts); // returns new dayjs object 
              },
              //--------------------------MONTH-------------------------------

              getMonth (ts){ 
              return dayjs(ts).month(); // gets current month
              },
              setMonth (ts) { 
              return dayjs().month(ts); // returns new dayjs object (months begin at 0)
              },

              //---------------------------WEEK-------------------------------

              getWeek (ts) {
              return dayjs(ts).week(); // ex : if ts is '2018-06-27' returns 26
              },

              setWeek (ts){
              return dayjs().week(ts); //returns new dayjs object
              },
          }

       }

export default dayjsMixins

