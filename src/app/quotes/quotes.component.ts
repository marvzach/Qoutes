import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes = [
    new Quote(1, "I am the streets, you better look both ways before you cross me.", "ShortGun Suge", 0, 0, "Zachary"),
    new Quote(2, "Ambition is priceless that’s something thats in your veins.", "ROSS", 0, 0, "Kidred"),
    // new Quote(3, "I was raised by the stop sign,No religion I was getting saved by the .9 .", "Meek Mill", 0, 0,"Marvin")
  ]
  toggleDetails(index) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  deleteQuote(isDelete, index) {

    if (isDelete) {
      let toDelete = confirm("To go ahead please click ok, otherwise cancel.");
      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }

  addNewQuote(quote) {
    if (quote.enterQuote == "" || quote.author == "" || quote.submitter == "") {
      alert("Empty field");
    }
    else {
      let quoteLength = this.quotes.length;
      quote.id = quoteLength + 1;
      quote.submitDate = new Date();
      this.quotes.push(quote);
    }
  }
  plusVote(isPlus, index) {
    if (isPlus) {
      this.quotes[index].upVote += 1;
    }
  }

  minusVote(isMinus, index) {
    if (isMinus) {
      this.quotes[index].downVote += 1;
    }
  }

  constructor() { }


  ngOnInit() {
  }
}
