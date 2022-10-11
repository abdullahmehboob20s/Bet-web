import Layout from "layouts/Layout";
import JackpotCard from "components/JackpotCard";
import JackPotWrapper from "components/JackPotWrapper";
import SportsPageLinks from "layouts/Sports/SportPageLinks";

function Sports() {
  return (
    <Layout navbarProps={{ NavbarBottomContent: SportsPageLinks }}>
      <div className="pt-7px mb-6">
        <div className="mb-4">
          <JackPotWrapper>
            <JackpotCard />
          </JackPotWrapper>
        </div>
      </div>
    </Layout>
  );
}

export default Sports;
