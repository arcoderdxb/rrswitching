var oArray = {
	 
	TransformerDeEnergization:[
	 ["1","","SS1","0.4","TR","LVDB","CHK","Check Voltage"],
	 ["2","","SS1","0.4","TR","INC","OP & ROUT","By Consunmer"],
	 ["3","","SS1","11","TR","FS","OP","TR de-energized"],
	 ["4","","SS1","11","TR","IL","SH",""],
	 ["5","","SS1","11","TR","FS","PLP",""],
	 ["6","","SS1","0.4","TR","LVDB","CHK","Check Voltage"],
	 ["7","","SS1","11","TR","ES","CL",""],
	 ["8","","SS1","11","TR","","WPI","Work Permit Issued"]],
	TransformerEnergization:[
	 ["1","","SS1","11","TR","","WPC","Work Permit collected"],
	 ["2","","SS1","0.4","TR","INC","OP & ROUT","Confirmed"],
	 ["3","","SS1","11","TR","ES","OP",""],
	 ["4","","SS1","11","TR","FS","PLR",""],
	 ["5","","SS1","11","TR","IL","SH",""],
	 ["6","","SS1","11","TR","FS","CL",""],
	 ["7","","SS1","0.4","TR","LVDB","CHK","Check Voltage"]],
	RMUDeEnergization:[
	["1","","ROS1","11","ROS2","ES","TPP",""],
	["2","","ROS1","11","ROS2","IS","CL","Ring Parallel"],
	["3","","ROS1","11","ROS2","ES","TPR",""],
	["4","","RHS","11","SS1","IS","OP","Ring Opened"],
	["5","","RHS","11","SS1","IL","SH",""],
	["6","","RHS","11","SS1","IS","PLP","PL#_____"],
	["7","","LHS","11","SS1","IS","OP","RMU de-energized"],
	["8","","LHS","11","SS1","IL","SH",""],
	["9","","LHS","11","SS1","IS","PLP","PL#_____"],
	["10","","LHS","11","SS1","ES","CL",""],
	["11","","RHS","11","SS1","ES","CL",""],
	["12","","SS1","11","RHS","IS","OP",""],
	["13","","SS1","11","RHS","IL","SH",""],
	["14","","SS1","11","RHS","ES","CL",""],
	["15","","SS1","11","LHS","IS","OP",""],
	["16","","SS1","11","LHS","IL","SH",""],
	["17","","SS1","11","LHS","ES","CL",""],
	["18","","SS1","11","TR-1","FS","OP",""],
	["19","","SS1","11","TR-1","IL","SH",""],
	["20","","SS1","11","TR-1","ES","CL",""],
	["21","","SS1","11","TR-1","LVDB","CHK","Check Volt"],
	["22","","SS1","11","","","WPI","Work Permit Issued"]],
	RMUEnergization:[
	["1","","SS1","11","","","WPC","Work Permit Collected"],
	["2","","SS1","11","TR-1","FS","Check",""],
	["3","","SS1","11","TR-1","ES","OP",""],
	["4","","SS1","11","TR-1","IL","SH",""],
	["5","","SS1","11","TR-1","FS","CL",""],
	["6","","SS1","11","LHS","ES","OP",""],
	["7","","SS1","11","LHS","IL","SH",""],
	["8","","SS1","11","LHS","IS","CL",""],
	["9","","SS1","11","RHS","ES","OP",""],
	["10","","SS1","11","RHS","IL","SH",""],
	["11","","SS1","11","RHS","ES","TPP",""],
	["12","","RHS","11","SS1","ES","OP",""],
	["13","","RHS","11","SS1","IS","PLR",""],
	["14","","RHS","11","SS1","IL","SH",""],
	["15","","RHS","11","SS1","ES","TPP",""],
	["16","","LHS","11","SS1","ES","OP",""],
	["17","","LHS","11","SS1","IS","PLR",""],
	["18","","LHS","11","SS1","IL","SH",""],
	["19","","LHS","11","SS1","ES","TPP",""],
	["20","","LHS","11","SS1","IS","CL","SS Energized"],
	["21","","LHS","11","SS1","ES","TPR",""],
	["22","","SS1","11","LHS","IS","CHK","LED Glowing & IS Identified"],
	["23","","SS1","0.4","TR-1","LVDB","CHK","Check Volt"],
	["24","","SS1","11","RHS","IS","CL","Cable Energized"],
	["25","","SS1","11","RHS","ES","TPR",""],
	["26","","RHS","11","SS1","IS","CL","Ring Paralleled"],
	["27","","RHS","11","SS1","ES","TPR",""],
	["28","","ROS1","11","ROS2","IS","OP","Ring opened & normalized"]],
	CableDeEnergization:[
	["1","","ROS1","11","ROS2","ES","TPP",""],
	["2","","ROS1","11","ROS2","IS","CL","Ring Parallel"],
	["3","","ROS1","11","ROS2","ES","TPR",""],
	["4","","SS-2","11","SS-1","IS","OP","Ring Opened"],
	["5","","SS-2","11","SS-1","IL","SH",""],
	["6","","SS-2","11","SS-1","IS","PLP","PL#_____"],
	["7","","SS-1","11","SS-2","IS","OP",""],
	["8","","SS-1","11","SS-2","IL","SH",""],
	["9","","SS-1","11","SS-2","IS","PLP","PL#_____"],
	["10","","SS-1","11","SS-2","ES","CL",""],
	["11","","SS-2","11","SS-1","ES","CL","Cable between SS-1 & SS-2 released"],
	["12","","SS-2","11","SS-1","Cable","WPI","Work Permit Issued"]],
	CableEnergization:[
	["1","","","11","","","WPC","Work Permit Collected"],
	["2","","SS-2","11","SS-1","ES","OP",""],
	["3","","SS-2","11","SS-1","IS","PLR",""],
	["4","","SS-2","11","SS-1","IL","SH",""],
	["5","","SS-2","11","SS-1","ES","TPP",""],
	["6","","SS-1","11","SS-2","ES","OP",""],
	["7","","SS-1","11","SS-2","IS","PLR",""],
	["8","","SS-1","11","SS-2","IL","SH",""],
	["9","","SS-1","11","SS-2","ES","TPP",""],
	["10","","SS-1","11","SS-2","IS","CL","Cable between SS-1 & SS-2 energized"],
	["11","","SS-1","11","SS-2","ES","TPR",""],
	["12","","SS-2","11","SS-1","IS","CL","Ring Parallel"],
	["13","","SS-2","11","SS-1","ES","TPR",""],
	["14","","ROS1","11","ROS2","IS","OP","Ring Normalized"]],
	RMU2RODeEnergization:[
	["1","","ROS1","11","ROS2","ES","TPP",""],
	["2","","ROS1","11","ROS2","IS","CL","Ring Parallel"],
	["3","","ROS1","11","ROS2","ES","TPR",""],
	["4","","RHS","11","SS1","IS","OP","Ring Opened"],
	["5","","RHS","11","SS1","IL","SH",""],
	["6","","RHS","11","SS1","IS","PLP","PL#_____"],
	["7","","ROS3","11","ROS4","ES","TPP",""],
	["8","","ROS3","11","ROS4","IS","CL","Ring Parallel"],
	["9","","ROS3","11","ROS4","ES","TPR",""],
	["10","","SW3","11","SS1","IS","OP","Ring Opened"],
	["11","","SW3","11","SS1","IL","SH",""],
	["12","","SW3","11","SS1","IS","PLP","PL#_____"],
	["13","","LHS","11","SS1","IS","OP","RMU de-energized"],
	["14","","LHS","11","SS1","IL","SH",""],
	["15","","LHS","11","SS1","IS","PLP","PL#_____"],
	["16","","LHS","11","SS1","ES","CL",""],
	["17","","RHS","11","SS1","ES","CL",""],
	["18","","SW3","11","SS1","ES","CL",""],
	["19","","SS1","11","RHS","IS","OP",""],
	["20","","SS1","11","RHS","IL","SH",""],
	["21","","SS1","11","RHS","ES","CL",""],
	["22","","SS1","11","LHS","IS","OP",""],
	["23","","SS1","11","LHS","IL","SH",""],
	["24","","SS1","11","LHS","ES","CL",""],
	["25","","SS1","11","SW3","IS","OP",""],
	["26","","SS1","11","SW3","IL","SH",""],
	["27","","SS1","11","SW3","ES","CL",""],
	["28","","SS1","11","TR-1","FS","OP",""],
	["29","","SS1","11","TR-1","IL","SH",""],
	["30","","SS1","11","TR-1","ES","CL",""],
	["31","","SS1","11","TR-1","LVDB","CHK","Check Volt"],
	["32","","SS1","11","","","WPI","Work Permit Issued"]],
	RMU2ROEnergization:[
	["1","","SS1","11","","","WPC","Work Permit Collected"],
	["2","","SS1","11","TR-1","FS","Check",""],
	["3","","SS1","11","TR-1","ES","OP",""],
	["4","","SS1","11","TR-1","IL","SH",""],
	["5","","SS1","11","TR-1","FS","CL",""],
	["6","","SS1","11","LHS","ES","OP",""],
	["7","","SS1","11","LHS","IL","SH",""],
	["8","","SS1","11","LHS","IS","CL",""],
	["9","","SS1","11","RHS","ES","OP",""],
	["10","","SS1","11","RHS","IL","SH",""],
	["11","","SS1","11","RHS","ES","TPP",""],
	["12","","SS1","11","SW3","ES","OP",""],
	["13","","SS1","11","SW3","IL","SH",""],
	["14","","SS1","11","SW3","ES","TPP",""],
	["15","","RHS","11","SS1","ES","OP",""],
	["16","","RHS","11","SS1","IS","PLR",""],
	["17","","RHS","11","SS1","IL","SH",""],
	["18","","RHS","11","SS1","ES","TPP",""],
	["19","","SW3","11","SS1","ES","OP",""],
	["20","","SW3","11","SS1","IS","PLR",""],
	["21","","SW3","11","SS1","IL","SH",""],
	["22","","SW3","11","SS1","ES","TPP",""],
	["23","","LHS","11","SS1","ES","OP",""],
	["24","","LHS","11","SS1","IS","PLR",""],
	["25","","LHS","11","SS1","IL","SH",""],
	["26","","LHS","11","SS1","ES","TPP",""],
	["27","","LHS","11","SS1","IS","CL","SS Energized"],
	["28","","LHS","11","SS1","ES","TPR",""],
	["29","","SS1","11","LHS","IS","CHK","LED Glowing & IS identified"],
	["30","","SS1","0.4","TR-1","LVDB","CHK","Check Volt"],
	["31","","SS1","11","RHS","IS","CL","Cable Energized"],
	["32","","SS1","11","RHS","ES","TPR",""],
	["33","","RHS","11","SS1","IS","CHK","LED Glowing"],
	["34","","RHS","11","SS1","IS","CL","Ring Paralleled"],
	["35","","RHS","11","SS1","ES","TPR",""],
	["36","","ROS1","11","ROS2","IS","OP","Ring opened & normalized"],
	["37","","SS1","11","SW3","IS","CL","Cable Energized"],
	["38","","SS1","11","SW3","ES","TPR",""],
	["39","","SW3","11","SS1","IS","CHK","LED Glowing"],
	["40","","SW3","11","SS1","IS","CL","Ring Paralleled"],
	["41","","SW3","11","SS1","ES","TPR",""],
	["42","","ROS3","11","ROS4","IS","OP","Ring opened & normalized"]],

	FirstLegCableDeEnergization:[
	["1","","ROS1","11","ROS2","ES","TPP",""],
	["2","","ROS1","11","ROS2","IS","CL","Ring Parallel"],
	["3","","ROS1","11","ROS2","ES","TPR",""],
	["4","","BASESS","11","SS-1","CB","OP","Ring Opened"],
	["5","","SS-1","11","BASESS","IS","OP","Cable De-energized"],
	["6","","SS-1","11","BASESS","IL","SH",""],
	["7","","SS-1","11","BASESS","IS","PLP","PL#_____"],
	["8","","BASESS","11","SS-1","SSW","LOC",""],
	["9","","BASESS","11","SS-1","CB","ROUT",""],
	["10","","BASESS","11","SS-1","ES","CL",""],
	["11","","SS-1","11","BASESS","ES","CL","Cable between BASESS & SS-1 released"],
	["12","","SS-1","11","BASESS","Cable","WPI","Work Permit Issued"]],
	FirstLegCableEnergization:[
	["1","","","11","","","WPC","Work Permit Collected"],
	["2","","SS-1","11","BASESS","ES","OP",""],
	["3","","SS-1","11","BASESS","IS","PLR",""],
	["4","","SS-1","11","BASESS","IL","SH",""],
	["5","","SS-1","11","BASESS","ES","TPP",""],
	["6","","BASESS","11","SS-1","ES","OP",""],
	["7","","BASESS","11","SS-1","CB","RIN",""],
	["8","","BASESS","11","SS-1","SSW","REM",""],
	["9","","BASESS","11","SS-1","CB","CL","Cable between BASESS & SS-1 energized"],
	["10","","SS-1","11","BASESS","IS","CL","Ring Parallel"],
	["11","","SS-1","11","BASESS","ES","TPR",""],
	["12","","ROS1","11","ROS2","IS","OP","Ring Normalized"]],
	
	IntroDEWALVDBEnergization:[
	["1","","SS","11","","","WPC","Work Permit Collected"],
	["2","","SS","11","TR-1","FS","Install Fuses",""],
	["3","","SS","11","TR-1","ES","OP",""],
	["4","","SS","11","TR-1","IL","SH",""],
	["5","","SS","11","TR-1","FS","CL",""],
	["6","","SS","11","LHS","ES","OP",""],
	["7","","SS","11","LHS","IL","SH",""],
	["8","","SS","11","LHS","IS","CL",""],
	["9","","SS","11","RHS","ES","OP",""],
	["10","","SS","11","RHS","IL","SH",""],
	["11","","SS","11","RHS","ES","TPP",""],
	["12","","RHS","11","SS","ES","OP",""],
	["13","","RHS","11","SS","IS","PLR",""],
	["14","","RHS","11","SS","IL","SH",""],
	["15","","RHS","11","SS","ES","TPP",""],
	["16","","LHS","11","SS","ES","OP",""],
	["17","","LHS","11","SS","IS","PLR",""],
	["18","","LHS","11","SS","IL","SH",""],
	["19","","LHS","11","SS","ES","TPP",""],
	["20","","LHS","11","SS","IS","CL","RMU and TR-1 Energized"],
	["21","","LHS","11","SS","ES","TPR",""],
	["22","","SS","11","LHS","IS","CHK","LED Glowing,IS Identified"],
	["23","","SS","0.4","TR-1","LVDB","CHK","Check Volt"],
	["24","","SS","11","RHS","IS","CL","Cable Energized"],
	["25","","SS","11","RHS","ES","TPR",""],
	["26","","SS","11","TR-1","FS","OP","TR-1 de-energized"],
	["27","","SS","11","TR-1","IL","SH",""],
	["28","","SS","11","TR-1","FS","PLP","PL#______"],
	["29","","SS","11","TR-1","ES","CL",""],
	["30","","RHS","11","SS","IS","CL","Ring Paralleled"],
	["31","","RHS","11","SS","ES","TPR",""],
	["32","","ROS1","11","ROS2","IS","OP","Ring opened & normalized"]],
	
	IntroPVTLVDBEnergization:[
	["1","","SS","11","","","WPC","Work Permit Collected"],
	["2","","SS","11","TR-1","FS","OP",""],
	["3","","SS","11","TR-1","IL","SH",""],
	["4","","SS","11","TR-1","FS","PLP",""],
	["5","","SS","11","TR-1","ES","CL",""],
	["6","","SS","11","LHS","ES","OP",""],
	["7","","SS","11","LHS","IL","SH",""],
	["8","","SS","11","LHS","IS","CL",""],
	["9","","SS","11","RHS","ES","OP",""],
	["10","","SS","11","RHS","IL","SH",""],
	["11","","SS","11","RHS","ES","TPP",""],
	["12","","RHS","11","SS","ES","OP",""],
	["13","","RHS","11","SS","IS","PLR",""],
	["14","","RHS","11","SS","IL","SH",""],
	["15","","RHS","11","SS","ES","TPP",""],
	["16","","LHS","11","SS","ES","OP",""],
	["17","","LHS","11","SS","IS","PLR",""],
	["18","","LHS","11","SS","IL","SH",""],
	["19","","LHS","11","SS","ES","TPP",""],
	["20","","LHS","11","SS","IS","CL","RMU Energized"],
	["21","","LHS","11","SS","ES","TPR",""],
	["22","","SS","11","LHS","IS","CHK","LED Glowing,IS Identified"],
	["23","","SS","11","RHS","IS","CL","Cable Energized"],
	["24","","SS","11","RHS","ES","TPR",""],
	["25","","RHS","11","SS","IS","CL","Ring Paralleled"],
	["26","","RHS","11","SS","ES","TPR",""],
	["27","","ROS1","11","ROS2","IS","OP","Ring opened & normalized"]],
	
		
	}
	   
		function addData() {

		// Get a reference to the table        
			table = document.getElementById("myTableData");
			  var  equipmentType = document.getElementById('switchingEquipment').value + document.getElementById('switchingType').value;
			  
			  cList = oArray[equipmentType];
			 for(var i = 0; i <cList.length; i++){
				   // create a new row
				   var newRow = table.insertRow(table.length);
				   for(var j = 0; j < cList[i].length;j++){
					   // create a new cell
					   var cell = newRow.insertCell(j);
					   
					   // add value to the cell
					   cell.innerHTML = cList[i][j];
					   
					  
			  }
			}
	var tElement = document.getElementById('switchingEquipment').value;
			
	  function replaceStr(str, find, replace) {
		for (var i = 0; i < find.length; i++) {
			str = str.replace(new RegExp(find[i], 'gi'), replace[i]);
		}
		return str;
	}
		
		switch(tElement){
		case 'Cable':
		
		var text = document.getElementById("myTableData").innerHTML;
		var find = ["SS-1","SS-2","ROS1","ROS2"];
		var vSS1 = document.getElementById('cableSubstation1').value;
		var vSS2 = document.getElementById('cableSubstation2').value;
		var vRO1 = document.getElementById('cableRingOff1').value;
		var vRO2 = document.getElementById('cableRingOff2').value;

		var replace = [vSS1,vSS2,vRO1,vRO2];
		text = replaceStr(text, find, replace);
		document.getElementById("myTableData").innerHTML = text;
		document.getElementById("s1").innerHTML = vSS1;
		document.getElementById("s2").innerHTML = vSS2;
		document.getElementById("s3").innerHTML = vRO1;
		break

		case 'FirstLegCable':
			
		var text = document.getElementById("myTableData").innerHTML;
		var find = ["SS-1","BASESS","ROS1","ROS2"];
		var vSS1 = document.getElementById('FirstLegSS1').value;
		var vSS2 = document.getElementById('BaseStation').value;
		var vRO1 = document.getElementById('baseCableRingOff1').value;
		var vRO2 = document.getElementById('baseCableRingOff2').value;

		var replace = [vSS1,vSS2,vRO1,vRO2];
		text = replaceStr(text, find, replace);
		document.getElementById("myTableData").innerHTML = text;
		document.getElementById("s1").innerHTML = vSS1;
		document.getElementById("s2").innerHTML = vRO1;



		break
		case 'RMU':
			
		var text = document.getElementById("myTableData").innerHTML;
		var find = ["SS1","RHS","LHS","ROS1","ROS2"];
		var vSS = document.getElementById('RMUSubstation').value;
		var vSS1 = document.getElementById('RMULHSSS').value;
		var vSS2 = document.getElementById('RMURHSSS').value;
		var vRO1 = document.getElementById('RMURingOff1').value;
		var vRO2 = document.getElementById('RMURingOff2').value;

		var replace = [vSS,vSS1,vSS2,vRO1,vRO2];
		text = replaceStr(text, find, replace);
		document.getElementById("myTableData").innerHTML = text;
		document.getElementById("s1").innerHTML = vSS1;
		document.getElementById("s2").innerHTML = vSS2;
		document.getElementById("s3").innerHTML = vRO1;



		break

		case 'RMU2RO':
			
		var text = document.getElementById("myTableData").innerHTML;
		var find = ["SS1","LHS","RHS","SW3","ROS1","ROS2","ROS3","ROS4"];
		var vSS = document.getElementById('RMU2Substation').value;
		var vSS1 = document.getElementById('RMU2LHSSS').value;
		var vSS2 = document.getElementById('RMU2RHSSS').value;
		var vSS3 = document.getElementById('RMU2SW3').value;
		var vRO1 = document.getElementById('RMU2RingOff1').value;
		var vRO2 = document.getElementById('RMU2RingOff2').value;
		var vRO3 = document.getElementById('RMU2RingOff3').value;
		var vRO4 = document.getElementById('RMU2RingOff4').value;

		var replace = [vSS,vSS1,vSS2,vSS3,vRO1,vRO2,vRO3,vRO4];
		text = replaceStr(text, find, replace);
		document.getElementById("myTableData").innerHTML = text;
		document.getElementById("s1").innerHTML = vSS1;
		document.getElementById("s2").innerHTML = vSS2;
		document.getElementById("s3").innerHTML = vSS3;
		document.getElementById("s4").innerHTML = vRO1;
		document.getElementById("s5").innerHTML = vRO3;

		break
		case 'Transformer':
			
		var text = document.getElementById("myTableData").innerHTML;
		var find = ["SS1","TR"];
		var vSS1 = document.getElementById('tSubstation').value;
		var vTR1 = document.getElementById('tTransformer').value;

		var replace = [vSS1,vTR1];
		text = replaceStr(text, find, replace);
		 
		document.getElementById("myTableData").innerHTML = text
		document.getElementById("s1").innerHTML = vSS1;
		break
		
		case 'IntroPVTLVDB':
			
		var text = document.getElementById("myTableData").innerHTML;
		var find = ["SS","LHS","RHS","ROS1","ROS2"];
		var vSS = document.getElementById('newPvtsubstation').value;
		var vSS1 = document.getElementById('newPvtSSLHS').value;
		var vSS2 = document.getElementById('newPvtSSRHS').value;
		var vRO1 = document.getElementById('newPvtSSRingOff1').value;
		var vRO2 = document.getElementById('newPvtSSRingOff2').value;

		var replace = [vSS,vSS1,vSS2,vRO1,vRO2];
		text = replaceStr(text, find, replace);
		document.getElementById("myTableData").innerHTML = text;
		document.getElementById("s1").innerHTML = vSS1;
		document.getElementById("s2").innerHTML = vSS2;
		document.getElementById("s3").innerHTML = vRO1;
		
		break
			
		
		case 'IntroDEWALVDB':
			
		var text = document.getElementById("myTableData").innerHTML;
		var find = ["SS","LHS","RHS","ROS1","ROS2"];
		var vSS = document.getElementById('newSubstation').value;
		var vSS1 = document.getElementById('newSSLHS').value;
		var vSS2 = document.getElementById('newSSRHS').value;
		var vRO1 = document.getElementById('newSSRingOff1').value;
		var vRO2 = document.getElementById('newSSRingOff2').value;

		var replace = [vSS,vSS1,vSS2,vRO1,vRO2];
		text = replaceStr(text, find, replace);
		document.getElementById("myTableData").innerHTML = text;
		document.getElementById("s1").innerHTML = vSS1;
		document.getElementById("s2").innerHTML = vSS2;
		document.getElementById("s3").innerHTML = vRO1;
					
			}

			}     

		 function getAndSetVal()
					{
					
		document.getElementById('td4').innerHTML = document.getElementById('tdateofWork').value;
		document.getElementById('td1').innerHTML = document.getElementById('trequestedBy').value;
		document.getElementById('td2').innerHTML = document.getElementById('ttypeofWork').value;
		document.getElementById('td3').innerHTML = document.getElementById('tdescriptionofWork').value;
		document.getElementById('td6').innerHTML = document.getElementById('tWPNo').value;
		document.getElementById('td8').innerHTML = document.getElementById('toutageNo').value;
		document.getElementById('td5').innerHTML = document.getElementById('selzone').value;

		document.getElementById('td7').innerHTML = document.getElementById('selShift').value;
		document.getElementById('td10').innerHTML = document.getElementById('tTEPageNo').value;
		document.getElementById('td11').innerHTML = document.getElementById('tlockNo').value
					}


		
		var switchingData = new function () {
			this.printTable = function () {
				var tab = document.getElementById('tbl_outageDetails');
				var tab1 = document.getElementById('tbl_operationcheck');
				var tab2 = document.getElementById('myTableData');
			
			let oDt = new Date();       

				// Get full date.
				let sDate = oDt.getDate() + '/' + (oDt.getMonth() + 1) + '/' + oDt.getFullYear();
				let pDate = '<p><b>Date</b>: ' + sDate + ' </p>';	
		
		
				let theBody = '';		

			let ele_tArea = document.getElementsByTagName('textarea');

            for (let i = 0; i <= ele_tArea.length - 1; i++) {
                if (theBody === '') {
                    if (ele_tArea[i].value != '') {
                        theBody = '<p class="remarks"> <b>Carried out by </b> : ' + ele_tArea[i].value + '</p>';
                    }
                }
                else {
                    if (ele_tArea[i].value != '') {
                        theBody = theBody + '<p class="remarks"> <b>Carried out by </b> : ' + ele_tArea[i].value + '</p>';
                    }
                }
            }

            theBody = theBody + pDate ;

			
			// CREATE A WINDOW OBJECT.	
				var win = window.open("");
				
			var style = "<style>";
					style = style + "table {width: 100%;font: 13px sans-serif;}";
					style = style + "table, th, td {border: solid 1px black; border-collapse: collapse;";
					win.document.write('<header><img src="dewalogo1.jpg" alt="DEWA Logo" class="screen"/></header>');
					style = style + "padding: 5px 5px;text-align: left;}";
					style = style + "table,th{width:1000px}";
					style = style + "table,td{width:1000px}";
					style = style + ".remarks {font:18px Calibri; padding:10px 0;}";
					
					style = style + "</style>";
			win.document.write(style);
			win.document.write(tab.outerHTML);
			win.document.write(tab1.outerHTML);
			win.document.write(tab2.outerHTML);
			win.document.write(theBody);
			
				win.document.close();
				win.print();
			}
		}
	
		function opencloseNav() {
		  var x = document.getElementById("myLinks");
		  if (x.style.display === "block") {
			x.style.display = "none";
		  } else {
			x.style.display = "block";
		  }
		}
		
		function switchingform(){
		document.getElementById("switchingForm").style.display = "block";
			
		}
		function outageform(){
		document.getElementById("outageDetailsForm").style.display = "block";
		
		}
		
		function closeoutageform(){
	document.getElementById('outageDetailsForm').style.display = 'none';
	}
		
		function closeswitchingform(){
	document.getElementById('switchingForm').style.display = 'none';
	}
	function fusechart(){
		var win = window.open("", "fusechart", "width=400,height=400");
		win.document.write('<img src="fusechart.jpg" alt="Fuse Chart" class="screen" />');
				
		}
	
	function awareness(){
		var win = window.open("", "fusechart", "width=400,height=400");
		win.document.write('<img src="fusechart.jpg" alt="Fuse Chart" class="screen" />');
		
		}
	