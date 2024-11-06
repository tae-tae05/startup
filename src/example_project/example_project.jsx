import React from 'react';

export function Example_Project() {
  return (
    <main className='container-fluid text-center'>
      <h2>💠 Project Name 💠</h2>

      <div class="project-info">
          <span class="color1">Hook Size: </span>3.5mm
          <label class="color1" for="count">Update </label>
          <input class="color2" type="text" id="count" value="- mm" readonly />
          <button class="button button1" type="submit">Submit</button>
      </div>

      <div class="project-info">
          <span class="color1">Yarn Type: </span>Acrylic yellow 5ply medium weight
          <label class="color1" for="type">Update </label>
          <input class="color2" type="text" id="type" value="input here" readonly />
          <button class="button button1" type="submit">Submit</button>
      </div>

      <div class="project-info">
          Counter A: 0
          <button class="button button1" type="button">Down</button>
          <button class="button button1" type="button">Up</button>
      </div>

      <div class="project-info">
          Counter B: 1
          <button class="button button1" type="button">Down</button>
          <button class="button button1" type="button">Up</button>
      </div>
      
      <div class="project-info">
          Counter C: 10
          <button class="button button1" type="button">Down</button>
          <button class="button button1" type="button">Up</button>
      </div>

      <h2>Message History</h2>
      <p class="messaging"><span class="color1">Jin: </span><span class="color2">What type of yarn should I use for a small amigurumi project?</span></p>
      <p class="messaging"><span class="color1">Yuki: </span><span class="color2">Use cotton if it's your first project. Otherwise, chenille is a great choice.</span></p>
      <p><label class="project-info" for="message">Message:</label></p>
      <textarea id="message" name="message" rows="4" cols="50"></textarea>
      <button class="button button1" type="Submit">Send</button>
  </main>
  );
}