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
  const volume = (Math.PI * radius ** 2 * height) / 3.0
  const surfaceArea = Math.PI * radius * (radius + (Math.sqrt(height ** 2 + radius ** 2))) 

  // output
  document.getElementById("volume-of-cone").innerHTML = volume.toFixed(2) + " cm³"
  document.getElementById("surface-area-of-cone").innerHTML = surfaceArea.toFixed(2) + " cm²"
}
