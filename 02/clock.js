
function clock(){
	//hour
	var hour_left_1 = document.getElementById('hour_left_1');
	var hour_left_2 = document.getElementById('hour_left_2');
	var hour_left_3 = document.getElementById('hour_left_3');
	var hour_left_4 = document.getElementById('hour_left_4');
	var hour_left_5 = document.getElementById('hour_left_5');
	var hour_left_6 = document.getElementById('hour_left_6');
	var hour_left_7 = document.getElementById('hour_left_7');

	var hour_right_1 = document.getElementById('hour_right_1');
	var hour_right_2 = document.getElementById('hour_right_2');
	var hour_right_3 = document.getElementById('hour_right_3');
	var hour_right_4 = document.getElementById('hour_right_4');
	var hour_right_5 = document.getElementById('hour_right_5');
	var hour_right_6 = document.getElementById('hour_right_6');
	var hour_right_7 = document.getElementById('hour_right_7');

	//minute
	var minute_left_1 = document.getElementById('minute_left_1');
	var minute_left_2 = document.getElementById('minute_left_2');
	var minute_left_3 = document.getElementById('minute_left_3');
	var minute_left_4 = document.getElementById('minute_left_4');
	var minute_left_5 = document.getElementById('minute_left_5');
	var minute_left_6 = document.getElementById('minute_left_6');
	var minute_left_7 = document.getElementById('minute_left_7');

	var minute_right_1 = document.getElementById('minute_right_1');
	var minute_right_2 = document.getElementById('minute_right_2');
	var minute_right_3 = document.getElementById('minute_right_3');
	var minute_right_4 = document.getElementById('minute_right_4');
	var minute_right_5 = document.getElementById('minute_right_5');
	var minute_right_6 = document.getElementById('minute_right_6');
	var minute_right_7 = document.getElementById('minute_right_7');

	//second
	var second_left_1 = document.getElementById('second_left_1');
	var second_left_2 = document.getElementById('second_left_2');
	var second_left_3 = document.getElementById('second_left_3');
	var second_left_4 = document.getElementById('second_left_4');
	var second_left_5 = document.getElementById('second_left_5');
	var second_left_6 = document.getElementById('second_left_6');
	var second_left_7 = document.getElementById('second_left_7');

	var second_right_1 = document.getElementById('second_right_1');
	var second_right_2 = document.getElementById('second_right_2');
	var second_right_3 = document.getElementById('second_right_3');
	var second_right_4 = document.getElementById('second_right_4');
	var second_right_5 = document.getElementById('second_right_5');
	var second_right_6 = document.getElementById('second_right_6');
	var second_right_7 = document.getElementById('second_right_7');

	//dots
	var dot_first_1 = document.getElementById('dot_first_1');
	var dot_first_2 = document.getElementById('dot_first_2');
	var dot_second_1 = document.getElementById('dot_second_1');
	var dot_second_2 = document.getElementById('dot_second_2');


	// dots
	var dot = false;

	function dots_on(){
		dot_first_1.setAttribute('class', 'on');
		dot_first_2.setAttribute('class', 'on');
		dot_second_1.setAttribute('class', 'on');
		dot_second_2.setAttribute('class', 'on');
		dot = true;
	}

	function dots_off(){
		dot_first_1.setAttribute('class', 'off');
		dot_first_2.setAttribute('class', 'off');
		dot_second_1.setAttribute('class', 'off');
		dot_second_2.setAttribute('class', 'off');
		dot = false;
	}


	// 0
	function hour_left_num_0(){
		hour_left_1.setAttribute('class', 'on');
		hour_left_2.setAttribute('class', 'on');
		hour_left_3.setAttribute('class', 'on');
		hour_left_4.setAttribute('class', 'on');
		hour_left_5.setAttribute('class', 'on');
		hour_left_6.setAttribute('class', 'on');
		hour_left_7.setAttribute('class', 'off');
	}

	function hour_right_num_0(){
		hour_right_1.setAttribute('class', 'on');
		hour_right_2.setAttribute('class', 'on');
		hour_right_3.setAttribute('class', 'on');
		hour_right_4.setAttribute('class', 'on');
		hour_right_5.setAttribute('class', 'on');
		hour_right_6.setAttribute('class', 'on');
		hour_right_7.setAttribute('class', 'off');
	}

	function minute_left_num_0(){
		minute_left_1.setAttribute('class', 'on');
		minute_left_2.setAttribute('class', 'on');
		minute_left_3.setAttribute('class', 'on');
		minute_left_4.setAttribute('class', 'on');
		minute_left_5.setAttribute('class', 'on');
		minute_left_6.setAttribute('class', 'on');
		minute_left_7.setAttribute('class', 'off');
	}

	function minute_right_num_0(){
		minute_right_1.setAttribute('class', 'on');
		minute_right_2.setAttribute('class', 'on');
		minute_right_3.setAttribute('class', 'on');
		minute_right_4.setAttribute('class', 'on');
		minute_right_5.setAttribute('class', 'on');
		minute_right_6.setAttribute('class', 'on');
		minute_right_7.setAttribute('class', 'off');
	}

	function second_left_num_0(){
		second_left_1.setAttribute('class', 'on');
		second_left_2.setAttribute('class', 'on');
		second_left_3.setAttribute('class', 'on');
		second_left_4.setAttribute('class', 'on');
		second_left_5.setAttribute('class', 'on');
		second_left_6.setAttribute('class', 'on');
		second_left_7.setAttribute('class', 'off');
	}

	function second_right_num_0(){
		second_right_1.setAttribute('class', 'on');
		second_right_2.setAttribute('class', 'on');
		second_right_3.setAttribute('class', 'on');
		second_right_4.setAttribute('class', 'on');
		second_right_5.setAttribute('class', 'on');
		second_right_6.setAttribute('class', 'on');
		second_right_7.setAttribute('class', 'off');
	}


	// 1
	function hour_left_num_1(){
		hour_left_1.setAttribute('class', 'off');
		hour_left_2.setAttribute('class', 'on');
		hour_left_3.setAttribute('class', 'on');
		hour_left_4.setAttribute('class', 'off');
		hour_left_5.setAttribute('class', 'off');
		hour_left_6.setAttribute('class', 'off');
		hour_left_7.setAttribute('class', 'off');
	}

	function hour_right_num_1(){
		hour_right_1.setAttribute('class', 'off');
		hour_right_2.setAttribute('class', 'on');
		hour_right_3.setAttribute('class', 'on');
		hour_right_4.setAttribute('class', 'off');
		hour_right_5.setAttribute('class', 'off');
		hour_right_6.setAttribute('class', 'off');
		hour_right_7.setAttribute('class', 'off');
	}

	function minute_left_num_1(){
		minute_left_1.setAttribute('class', 'off');
		minute_left_2.setAttribute('class', 'on');
		minute_left_3.setAttribute('class', 'on');
		minute_left_4.setAttribute('class', 'off');
		minute_left_5.setAttribute('class', 'off');
		minute_left_6.setAttribute('class', 'off');
		minute_left_7.setAttribute('class', 'off');
	}

	function minute_right_num_1(){
		minute_right_1.setAttribute('class', 'off');
		minute_right_2.setAttribute('class', 'on');
		minute_right_3.setAttribute('class', 'on');
		minute_right_4.setAttribute('class', 'off');
		minute_right_5.setAttribute('class', 'off');
		minute_right_6.setAttribute('class', 'off');
		minute_right_7.setAttribute('class', 'off');
	}

	function second_left_num_1(){
		second_left_1.setAttribute('class', 'off');
		second_left_2.setAttribute('class', 'on');
		second_left_3.setAttribute('class', 'on');
		second_left_4.setAttribute('class', 'off');
		second_left_5.setAttribute('class', 'off');
		second_left_6.setAttribute('class', 'off');
		second_left_7.setAttribute('class', 'off');
	}

	function second_right_num_1(){
		second_right_1.setAttribute('class', 'off');
		second_right_2.setAttribute('class', 'on');
		second_right_3.setAttribute('class', 'on');
		second_right_4.setAttribute('class', 'off');
		second_right_5.setAttribute('class', 'off');
		second_right_6.setAttribute('class', 'off');
		second_right_7.setAttribute('class', 'off');
	}



	// 2
	function hour_left_num_2(){
		hour_left_1.setAttribute('class', 'on');
		hour_left_2.setAttribute('class', 'on');
		hour_left_3.setAttribute('class', 'off');
		hour_left_4.setAttribute('class', 'on');
		hour_left_5.setAttribute('class', 'on');
		hour_left_6.setAttribute('class', 'off');
		hour_left_7.setAttribute('class', 'on');
	}

	function hour_right_num_2(){
		hour_right_1.setAttribute('class', 'on');
		hour_right_2.setAttribute('class', 'on');
		hour_right_3.setAttribute('class', 'off');
		hour_right_4.setAttribute('class', 'on');
		hour_right_5.setAttribute('class', 'on');
		hour_right_6.setAttribute('class', 'off');
		hour_right_7.setAttribute('class', 'on');
	}

	function minute_left_num_2(){
		minute_left_1.setAttribute('class', 'on');
		minute_left_2.setAttribute('class', 'on');
		minute_left_3.setAttribute('class', 'off');
		minute_left_4.setAttribute('class', 'on');
		minute_left_5.setAttribute('class', 'on');
		minute_left_6.setAttribute('class', 'off');
		minute_left_7.setAttribute('class', 'on');
	}

	function minute_right_num_2(){
		minute_right_1.setAttribute('class', 'on');
		minute_right_2.setAttribute('class', 'on');
		minute_right_3.setAttribute('class', 'off');
		minute_right_4.setAttribute('class', 'on');
		minute_right_5.setAttribute('class', 'on');
		minute_right_6.setAttribute('class', 'off');
		minute_right_7.setAttribute('class', 'on');
	}

	function second_left_num_2(){
		second_left_1.setAttribute('class', 'on');
		second_left_2.setAttribute('class', 'on');
		second_left_3.setAttribute('class', 'off');
		second_left_4.setAttribute('class', 'on');
		second_left_5.setAttribute('class', 'on');
		second_left_6.setAttribute('class', 'off');
		second_left_7.setAttribute('class', 'on');
	}

	function second_right_num_2(){
		second_right_1.setAttribute('class', 'on');
		second_right_2.setAttribute('class', 'on');
		second_right_3.setAttribute('class', 'off');
		second_right_4.setAttribute('class', 'on');
		second_right_5.setAttribute('class', 'on');
		second_right_6.setAttribute('class', 'off');
		second_right_7.setAttribute('class', 'on');
	}



	// 3
	function hour_right_num_3(){
		hour_right_1.setAttribute('class', 'on');
		hour_right_2.setAttribute('class', 'on');
		hour_right_3.setAttribute('class', 'on');
		hour_right_4.setAttribute('class', 'on');
		hour_right_5.setAttribute('class', 'off');
		hour_right_6.setAttribute('class', 'off');
		hour_right_7.setAttribute('class', 'on');
	}

	function minute_left_num_3(){
		minute_left_1.setAttribute('class', 'on');
		minute_left_2.setAttribute('class', 'on');
		minute_left_3.setAttribute('class', 'on');
		minute_left_4.setAttribute('class', 'on');
		minute_left_5.setAttribute('class', 'off');
		minute_left_6.setAttribute('class', 'off');
		minute_left_7.setAttribute('class', 'on');
	}

	function minute_right_num_3(){
		minute_right_1.setAttribute('class', 'on');
		minute_right_2.setAttribute('class', 'on');
		minute_right_3.setAttribute('class', 'on');
		minute_right_4.setAttribute('class', 'on');
		minute_right_5.setAttribute('class', 'off');
		minute_right_6.setAttribute('class', 'off');
		minute_right_7.setAttribute('class', 'on');
	}

	function second_left_num_3(){
		second_left_1.setAttribute('class', 'on');
		second_left_2.setAttribute('class', 'on');
		second_left_3.setAttribute('class', 'on');
		second_left_4.setAttribute('class', 'on');
		second_left_5.setAttribute('class', 'off');
		second_left_6.setAttribute('class', 'off');
		second_left_7.setAttribute('class', 'on');
	}

	function second_right_num_3(){
		second_right_1.setAttribute('class', 'on');
		second_right_2.setAttribute('class', 'on');
		second_right_3.setAttribute('class', 'on');
		second_right_4.setAttribute('class', 'on');
		second_right_5.setAttribute('class', 'off');
		second_right_6.setAttribute('class', 'off');
		second_right_7.setAttribute('class', 'on');
	}



	// 4
	function hour_right_num_4(){
		hour_right_1.setAttribute('class', 'off');
		hour_right_2.setAttribute('class', 'on');
		hour_right_3.setAttribute('class', 'on');
		hour_right_4.setAttribute('class', 'off');
		hour_right_5.setAttribute('class', 'off');
		hour_right_6.setAttribute('class', 'on');
		hour_right_7.setAttribute('class', 'on');
	}

	function minute_left_num_4(){
		minute_left_1.setAttribute('class', 'off');
		minute_left_2.setAttribute('class', 'on');
		minute_left_3.setAttribute('class', 'on');
		minute_left_4.setAttribute('class', 'off');
		minute_left_5.setAttribute('class', 'off');
		minute_left_6.setAttribute('class', 'on');
		minute_left_7.setAttribute('class', 'on');
	}

	function minute_right_num_4(){
		minute_right_1.setAttribute('class', 'off');
		minute_right_2.setAttribute('class', 'on');
		minute_right_3.setAttribute('class', 'on');
		minute_right_4.setAttribute('class', 'off');
		minute_right_5.setAttribute('class', 'off');
		minute_right_6.setAttribute('class', 'on');
		minute_right_7.setAttribute('class', 'on');
	}

	function second_left_num_4(){
		second_left_1.setAttribute('class', 'off');
		second_left_2.setAttribute('class', 'on');
		second_left_3.setAttribute('class', 'on');
		second_left_4.setAttribute('class', 'off');
		second_left_5.setAttribute('class', 'off');
		second_left_6.setAttribute('class', 'on');
		second_left_7.setAttribute('class', 'on');
	}

	function second_right_num_4(){
		second_right_1.setAttribute('class', 'off');
		second_right_2.setAttribute('class', 'on');
		second_right_3.setAttribute('class', 'on');
		second_right_4.setAttribute('class', 'off');
		second_right_5.setAttribute('class', 'off');
		second_right_6.setAttribute('class', 'on');
		second_right_7.setAttribute('class', 'on');
	}


	// 5
	function hour_right_num_5(){
		hour_right_1.setAttribute('class', 'on');
		hour_right_2.setAttribute('class', 'off');
		hour_right_3.setAttribute('class', 'on');
		hour_right_4.setAttribute('class', 'on');
		hour_right_5.setAttribute('class', 'off');
		hour_right_6.setAttribute('class', 'on');
		hour_right_7.setAttribute('class', 'on');
	}

	function minute_left_num_5(){
		minute_left_1.setAttribute('class', 'on');
		minute_left_2.setAttribute('class', 'off');
		minute_left_3.setAttribute('class', 'on');
		minute_left_4.setAttribute('class', 'on');
		minute_left_5.setAttribute('class', 'off');
		minute_left_6.setAttribute('class', 'on');
		minute_left_7.setAttribute('class', 'on');
	}

	function minute_right_num_5(){
		minute_right_1.setAttribute('class', 'on');
		minute_right_2.setAttribute('class', 'off');
		minute_right_3.setAttribute('class', 'on');
		minute_right_4.setAttribute('class', 'on');
		minute_right_5.setAttribute('class', 'off');
		minute_right_6.setAttribute('class', 'on');
		minute_right_7.setAttribute('class', 'on');
	}

	function second_left_num_5(){
		second_left_1.setAttribute('class', 'on');
		second_left_2.setAttribute('class', 'off');
		second_left_3.setAttribute('class', 'on');
		second_left_4.setAttribute('class', 'on');
		second_left_5.setAttribute('class', 'off');
		second_left_6.setAttribute('class', 'on');
		second_left_7.setAttribute('class', 'on');
	}

	function second_right_num_5(){
		second_right_1.setAttribute('class', 'on');
		second_right_2.setAttribute('class', 'off');
		second_right_3.setAttribute('class', 'on');
		second_right_4.setAttribute('class', 'on');
		second_right_5.setAttribute('class', 'off');
		second_right_6.setAttribute('class', 'on');
		second_right_7.setAttribute('class', 'on');
	}



	// 6
	function hour_right_num_6(){
		hour_right_1.setAttribute('class', 'on');
		hour_right_2.setAttribute('class', 'off');
		hour_right_3.setAttribute('class', 'on');
		hour_right_4.setAttribute('class', 'on');
		hour_right_5.setAttribute('class', 'on');
		hour_right_6.setAttribute('class', 'on');
		hour_right_7.setAttribute('class', 'on');
	}

	function minute_right_num_6(){
		minute_right_1.setAttribute('class', 'on');
		minute_right_2.setAttribute('class', 'off');
		minute_right_3.setAttribute('class', 'on');
		minute_right_4.setAttribute('class', 'on');
		minute_right_5.setAttribute('class', 'on');
		minute_right_6.setAttribute('class', 'on');
		minute_right_7.setAttribute('class', 'on');
	}

	function second_right_num_6(){
		second_right_1.setAttribute('class', 'on');
		second_right_2.setAttribute('class', 'off');
		second_right_3.setAttribute('class', 'on');
		second_right_4.setAttribute('class', 'on');
		second_right_5.setAttribute('class', 'on');
		second_right_6.setAttribute('class', 'on');
		second_right_7.setAttribute('class', 'on');
	}



	// 6
	function hour_right_num_6(){
		hour_right_1.setAttribute('class', 'on');
		hour_right_2.setAttribute('class', 'off');
		hour_right_3.setAttribute('class', 'on');
		hour_right_4.setAttribute('class', 'on');
		hour_right_5.setAttribute('class', 'on');
		hour_right_6.setAttribute('class', 'on');
		hour_right_7.setAttribute('class', 'on');
	}	
	function minute_right_num_6(){
		minute_right_1.setAttribute('class', 'on');
		minute_right_2.setAttribute('class', 'off');
		minute_right_3.setAttribute('class', 'on');
		minute_right_4.setAttribute('class', 'on');
		minute_right_5.setAttribute('class', 'on');
		minute_right_6.setAttribute('class', 'on');
		minute_right_7.setAttribute('class', 'on');
	}
	function second_right_num_6(){
		second_right_1.setAttribute('class', 'on');
		second_right_2.setAttribute('class', 'off');
		second_right_3.setAttribute('class', 'on');
		second_right_4.setAttribute('class', 'on');
		second_right_5.setAttribute('class', 'on');
		second_right_6.setAttribute('class', 'on');
		second_right_7.setAttribute('class', 'on');
	}


	// 7
	function hour_right_num_7(){
		hour_right_1.setAttribute('class', 'on');
		hour_right_2.setAttribute('class', 'on');
		hour_right_3.setAttribute('class', 'on');
		hour_right_4.setAttribute('class', 'off');
		hour_right_5.setAttribute('class', 'off');
		hour_right_6.setAttribute('class', 'on');
		hour_right_7.setAttribute('class', 'off');
	}

	function minute_right_num_7(){
		minute_right_1.setAttribute('class', 'on');
		minute_right_2.setAttribute('class', 'on');
		minute_right_3.setAttribute('class', 'on');
		minute_right_4.setAttribute('class', 'off');
		minute_right_5.setAttribute('class', 'off');
		minute_right_6.setAttribute('class', 'on');
		minute_right_7.setAttribute('class', 'off');
	}

	function second_right_num_7(){
		second_right_1.setAttribute('class', 'on');
		second_right_2.setAttribute('class', 'on');
		second_right_3.setAttribute('class', 'on');
		second_right_4.setAttribute('class', 'off');
		second_right_5.setAttribute('class', 'off');
		second_right_6.setAttribute('class', 'on');
		second_right_7.setAttribute('class', 'off');
	}



	// 8
	function hour_right_num_8(){
		hour_right_1.setAttribute('class', 'on');
		hour_right_2.setAttribute('class', 'on');
		hour_right_3.setAttribute('class', 'on');
		hour_right_4.setAttribute('class', 'on');
		hour_right_5.setAttribute('class', 'on');
		hour_right_6.setAttribute('class', 'on');
		hour_right_7.setAttribute('class', 'on');
	}

	function minute_right_num_8(){
		minute_right_1.setAttribute('class', 'on');
		minute_right_2.setAttribute('class', 'on');
		minute_right_3.setAttribute('class', 'on');
		minute_right_4.setAttribute('class', 'on');
		minute_right_5.setAttribute('class', 'on');
		minute_right_6.setAttribute('class', 'on');
		minute_right_7.setAttribute('class', 'on');
	}

	function second_right_num_8(){
		second_right_1.setAttribute('class', 'on');
		second_right_2.setAttribute('class', 'on');
		second_right_3.setAttribute('class', 'on');
		second_right_4.setAttribute('class', 'on');
		second_right_5.setAttribute('class', 'on');
		second_right_6.setAttribute('class', 'on');
		second_right_7.setAttribute('class', 'on');
	}


	// 9
	function hour_right_num_9(){
		hour_right_1.setAttribute('class', 'on');
		hour_right_2.setAttribute('class', 'on');
		hour_right_3.setAttribute('class', 'on');
		hour_right_4.setAttribute('class', 'on');
		hour_right_5.setAttribute('class', 'off');
		hour_right_6.setAttribute('class', 'on');
		hour_right_7.setAttribute('class', 'on');
	}

	function minute_right_num_9(){
		minute_right_1.setAttribute('class', 'on');
		minute_right_2.setAttribute('class', 'on');
		minute_right_3.setAttribute('class', 'on');
		minute_right_4.setAttribute('class', 'on');
		minute_right_5.setAttribute('class', 'off');
		minute_right_6.setAttribute('class', 'on');
		minute_right_7.setAttribute('class', 'on');
	}

	function second_right_num_9(){
		second_right_1.setAttribute('class', 'on');
		second_right_2.setAttribute('class', 'on');
		second_right_3.setAttribute('class', 'on');
		second_right_4.setAttribute('class', 'on');
		second_right_5.setAttribute('class', 'off');
		second_right_6.setAttribute('class', 'on');
		second_right_7.setAttribute('class', 'on');
	}

	function clock(time_num, time_type){
		
		if(time_type == "h_1"){
			if(time_num == 0){
				hour_left_num_0(); 
			
			} else if(time_num == 1) {
				 hour_left_num_1(); 

			} else if(time_num == 2){
				hour_left_num_2(); 

			}

		} else if(time_type == "h_2"){
			if(time_num == 0){ 
				hour_right_num_0(); 

			} else if(time_num == 1) { 
				hour_right_num_1(); 

			} else if(time_num == 2) { 
				hour_right_num_2(); 

			} else if(time_num == 3) { 
				hour_right_num_3(); 

			} else if(time_num == 4) { 
				hour_right_num_4(); 

			} else if(time_num == 5) { 
				hour_right_num_5(); 

			} else if(time_num == 6) { 
				hour_right_num_6(); 

			} else if(time_num == 7) { 
				hour_right_num_7(); 

			} else if(time_num == 8) { 
				hour_right_num_8(); 

			} else if(time_num == 9) { 
				hour_right_num_9(); 
			}

		} else if(time_type == "m_1"){
			if(time_num == 0) { 
				minute_left_num_0(); 

			} else if(time_num == 1) { 
				minute_left_num_1(); 

			} else if(time_num == 2) { 
				minute_left_num_2(); 

			} else if(time_num == 3) { 
				minute_left_num_3(); 

			} else if(time_num == 4) { 
				minute_left_num_4(); 

			} else if(time_num == 5) { 
				minute_left_num_5(); 

			}

		} else if(time_type == "m_2"){

			if(time_num == 0) { 
				minute_right_num_0(); 

			} else if(time_num == 1) { 
				minute_right_num_1(); 

			} else if(time_num == 2) { 
				minute_right_num_2(); 

			} else if(time_num == 3) { 
				minute_right_num_3(); 

			} else if(time_num == 4) { 
				minute_right_num_4(); 

			} else if(time_num == 5) { 
				minute_right_num_5(); 

			} else if(time_num == 6) { 
				minute_right_num_6(); 

			} else if(time_num == 7) { 
				minute_right_num_7(); 

			} else if(time_num == 8) { 
				minute_right_num_8(); 

			} else if(time_num == 9) { 
				minute_right_num_9(); 

			} 

		} else if(time_type == "s_1") {
			if(time_num == 0) { 
				second_left_num_0(); 
			}else if(time_num == 1) { 
				second_left_num_1(); 

			}else if(time_num == 2) { 
				second_left_num_2(); 

			}else if(time_num == 3) { 
				second_left_num_3(); 

			}else if(time_num == 4) { 
				second_left_num_4(); 

			}else if(time_num == 5) { 
				second_left_num_5(); 
			
			}

		} else if(time_type == "s_2"){

			if(time_num == 0) { 
				second_right_num_0(); 

			} else if(time_num == 1) { 
				second_right_num_1(); 

			} else if(time_num == 2) { 
				second_right_num_2(); 

			} else if(time_num == 3) { 
				second_right_num_3(); 

			} else if(time_num == 4) { 
				second_right_num_4(); 

			} else if(time_num == 5) { 
				second_right_num_5(); 

			} else if(time_num == 6) { 
				second_right_num_6(); 

			} else if(time_num == 7) { 
				second_right_num_7(); 

			} else if(time_num == 8) { 
				second_right_num_8(); 

			} else if(time_num == 9) { 
				second_right_num_9(); 
			}
		}
	}


	//audios
	var se_deta = new Audio('se/deta.mp3');
	var se_ah = new Audio('se/ah.mp3');
	var se_haxa = new Audio('se/haxa.mp3');
	var se_yukkuri = new Audio('se/yukkuri.mp3');
	var se_lunch_time = new Audio('se/lunch_time.mp3');
	var se_pi = new Audio('se/pi.mp3');
	var se_MGS = new Audio('se/MGS.mp3');
	var se_conan = new Audio('se/conan.mp3');
	var se_zelda = new Audio('se/zelda.mp3');
	var se_mario = new Audio('se/mario.mp3');
	var se_ff = new Audio('se/ff.mp3');


	//fanbox
	var fanbox = document.getElementById('funbox');
	var arr_funbox_item = {
		'pi'     : arr_item = [se_pi, ''],
		'ah'     : arr_item = [se_ah, ''],
		'deta'   : arr_item = [se_deta,'<img src="img/rainbow.gif"> ']
	}

	var arr_funbox_random_item = new Array(
		arr_item = [se_yukkuri,'<img src="img/yukkuri.jpg">'],
		arr_item = [se_MGS,    '<img src="img/MGS.jpg">'],
		arr_item = [se_conan,  '<img src="img/conan.jpg">'],
		arr_item = [se_zelda,  '<img src="img/zelda.jpg">'],
		arr_item = [se_mario,  '<img src="img/mario.png">'],
		arr_item = [se_ff,     '<img src="img/ff.jpg">']
	);
	
	
	function random_funbox(num){
		

		for(i = 0; i <= num; i++) {
			console.log(num + " : i " + i);

			if(i == num) {

				arr_funbox_random_item[i][0].play();
				funbox.innerHTML = arr_funbox_random_item[i][1];
				break;
			}
		}
	}

	var i = setInterval(function(){
	    // do your thing
	    if(!dot){
	    	dots_on();
	    } else {
	    	dots_off();
	    }
	    
	    date = new Date();

	    // date.setHours(date.getHours() - 2 );
	    // date.setMinutes(date.getMinutes() + 8);
	    // date.setSeconds(30);


	    hh = date.getHours();
		mm = date.getMinutes();
		ss = date.getSeconds();

		var h_1, h_2, m_1, m_2, s_1, s_2;
		h_1 = Math.floor(hh/10);
		h_2 = hh - h_1*10;
		
		m_1 = Math.floor(mm/10);
		m_2 = mm - m_1*10;

		s_1 = Math.floor(ss/10);
		s_2 = ss - s_1*10;


		
		if(    h_1 == 1 && h_2 == 1
			&& m_1 == 5 && m_2 == 9
			&& s_1 == 5 && s_2 > 6) {
			se_pi.play();

		}

		if(    h_1 == 1 && h_2 == 2
			&& m_1 == 0 && m_2 == 0
			&& s_1 == 0 && s_2 == 0) {
			arr_funbox_item.deta[0].play();
			fanbox.innerHTML = arr_funbox_item.deta[1];
		}

		if(    h_1 != 0 && h_2 != 0
			&& m_1 != 0 
			&& s_1 == 0 && s_2 == 0) {

			console.log('test');
			random_funbox(Math.floor((Math.random() * 6) + 1) -1);
			// random_funbox(1);
		}
		
		if(s_2 > 3 ) {
			fanbox.innerHTML = '';
		}

		if(    m_1 == 3 && m_2 == 0
			&& s_1 == 0 && s_2 == 0){
			se_ah.play();
		}


	    clock(h_1, "h_1");
	    clock(h_2, "h_2");

	    clock(m_1, "m_1");
	    clock(m_2, "m_2");

	    clock(s_1, "s_1");
	    clock(s_2, "s_2");

	    // console.log("h_1 = " + h_1);
	    // console.log("h_2 = " + h_2);
	    // console.log("m_1 = " + m_1);
	    // console.log("m_2 = " + m_2);
	    // console.log("h_1 = " + h_1);
	    // console.log("h_2 = " + h_2);
	    // console.log(hh + ":" + mm + ":" + ss);
	}, 1000);
}