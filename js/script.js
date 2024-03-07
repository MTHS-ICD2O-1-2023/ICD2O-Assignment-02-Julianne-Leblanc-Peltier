// Copyright (c) 2024 Julianne Leblanc-Peltier All rights reserved
//
// Created by: Julianne Leblanc-Peltier
// Created on: March 2024
// This file contains the JS functions for index.html

function myButtonClicked () {
  // input
  const radius = parseInt(document.getElementById("radius-of-cone").value)
  const height = parseInt(document.getElementById("height-of-cone").value)

  // process
  const volume = 1/3 * (Math.PI) * (radius * radius) * height
  // const volume = radius + height // not proper forumla, using to see if process works

  // output
  document.getElementById("volume-of-cone").innerHTML = volume.toFixed() + " cm²"
}
