import React from "react";
import ClubCard from "../../components/clubs/ClubCard";
import PageHero from "../../components/PageHero";
import { Grid, Button } from "@material-ui/core";
import clubs from "../../data/clubs";
import PageSection from "../../components/PageSection";
import OpenForm from "../../components/clubs/OpenForm";
import { Helmet } from "react-helmet";

export default function CurrentClubs() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Current Clubs - Youth Economics Initiative (YEI)</title>
        <meta
          name="description"
          content="YEI EconClubs is the premier high school economics club program for students who want to supercharge their economics journey. View YEI's current list of clubs."
        />
      </Helmet>
      <PageHero
        title="YEI Current Clubs"
        paragraph={`View YEI's current ${clubs.length} clubs.`}
        imgURL="https://res.cloudinary.com/masonwang/image/upload/v1599407913/yei-website/manypixels-isometric/currentClubsHero.png"
        callToAction={
          <OpenForm>
            <Button aria-label="button" variant="contained" color="secondary">
              Join the List
            </Button>
          </OpenForm>
        }
      />

      <PageSection pt={-2} pb={3} centerOnMobile>
        <Grid container alignItems="stretch" justify="center" spacing={3}>
          {clubs.map((club) => {
            let key = club.chapter.replace(/\s+/g, "-");
            let imgURL = club.imgURL
              ? club.imgURL
              : `https://res.cloudinary.com/masonwang/image/upload/v1599534526/yei-website/clubs/${key}.png`;

            return (
              <Grid key={key} item xs={12} sm={6} md={4} lg={3}>
                <ClubCard
                  chapter={club.chapter}
                  region={club.region}
                  imgURL={imgURL}
                  email={club.email}
                  founding={club.founding}
                  primaryFounding={club.primaryFounding}
                />
              </Grid>
            );
          })}
        </Grid>
      </PageSection>
    </div>
  );
}
