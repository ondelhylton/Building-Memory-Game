import React, { Component } from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Scorecard from "../components/Scorecard";
import icons from "./cards.json";
import Card from "../components/Card";



class Home extends Component {

  state = {
    icons,
    clickedIconIds: [],
    score: 0,
    goal: 8,
    status: ""
  };

  shuffleScoreCard = id => {
    let clickedIconIds = this.state.clickedIconIds;

    if(clickedIconIds.includes(id)){
      this.setState({ clickedIconIds: [], score: 0, status:  "Game Over! Hint: Guess in order by date or style" });
      return;
    }else{
      clickedIconIds.push(id)

      if(clickedIconIds.length === 8){
        this.setState({score: 8, status: "You Won! Play again!", clickedIconIds: []});
        return;
      }

      this.setState({ icons, clickedIconIds, score: clickedIconIds.length, status: " " });

      for (let i = icons.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [icons[i], icons[j]] = [icons[j], icons[i]];
      }
    }
  }


render() {
  return (
    <div>
      <Hero backgroundImage="https://upload.wikimedia.org/wikipedia/commons/5/5f/New_York_City_skyline_banner.jpg">
        <h1>Building Memory</h1>
        <h2>Featuring NYC's Most Buildings</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
      <h4 className="text-center">Click on an image to earn points, but don't click on any more than once!</h4>
      <Scorecard total={this.state.score}
               goal={8}
               status={this.state.status}
               />
        
        <Row>
          <Col size="md-6 md-6">
            
          {this.state.icons.map(icon => (
            <Card
              shuffleScoreCard={this.shuffleScoreCard}
              id={icon.id}
              key={icon.id}
              image={icon.image}
            />
          ))}

          </Col>
          
        </Row>
      </Container>
    </div>
  );
}
}

export default Home;
