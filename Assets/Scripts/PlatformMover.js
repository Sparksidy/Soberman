﻿#pragma strict

private var Xpos: float;
private var Ypos: float;
private var max: boolean;

var Vert : boolean;
var maxAmount: int;
var step : float;


function Start () {
	Xpos = transform.position.x; 
	Ypos = transform.position.y;
}

function FixedUpdate () {
	if(Vert){ // Vertical Movement
		if(!max){
			transform.position.y += step;
		}
		else{
			transform.position.y -= step;
		}
	}
	else{ // Horizontal Movement
		if(!max){
			transform.position.x += step;
		}
		else{
			transform.position.x -= step;
		}
	
	}
	//Set the Max
	if(Vert){ // Vertical Max
		if(transform.position.y >= Ypos + maxAmount){
			max = true;
		}
		else if(transform.position.y <= Ypos )
		{
			max = false;
		}
	}
	else{// Horizontal Max
			if(transform.position.x >= Xpos + maxAmount){
				max = true;
			}
			else if(transform.position.x <= Xpos){
				max = false;
			}
	}
}