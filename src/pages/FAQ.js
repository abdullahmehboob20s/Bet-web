import CrossButton from "components/CrossButton";
import Drawer from "components/Drawer";
import { useNavigate } from "react-router-dom";

function FAQ() {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,.8)] z-[200]">
      <Drawer
        title="FAQ"
        HeaderRightComponent={() => (
          <CrossButton onClick={() => navigate(-1)} />
        )}
      >
        {/* <div className="space-y-6 px-4 py-4"></div> */}

        <div className="px-4 py-4">
          <p className="text-base">CONTACT US</p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">LIVE CHAT</p>

          <p className="text-13px text-white-6">
            Our 24/7 Live Support service is always happy to help you.
          </p>

          <p>
            <br />
            EMAIL
          </p>

          <p className="text-13px text-white-6">
            For all customer queries, please email us at support@vbet.com and
            quote your name and account number.
          </p>

          <p className="text-13px text-white-6">
            For all other offers and inquiries, please email us your request at
            info@vbet.com.
          </p>

          <p className="text-13px text-white-6">
            Please, email your verification documents to docs@vbet.com.
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">Phone number</p>

          <p className="text-13px text-white-6">+1 (323) 3955131</p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">Registration</p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">Why do I need to be registered?</p>

          <p className="text-13px text-white-6">
            Registration on Vbet website is a condition for using all the
            products available on the website. Registration entitles you to open
            a Vbet.com account free-of-charge and without obligations. Use the
            account to manage your bets and personal data. You can make bets
            with real money after you replenish your account.
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">How can I register on your website?</p>

          <p className="text-13px text-white-6">
            To register on our website, visit the “Register” section in the
            upper right corner. Please be careful and take into account the
            proposed registration requirements in order to avoid further
            problems. We recommend that you get acquainted with our rules in
            advance.
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">
            Why should I specify my personal data when registering?
          </p>

          <p className="text-13px text-white-6">
            The accuracy of your data is a condition of using our products.
            Management of your money in your Vbet account is implemented in a
            similar way to a bank account. We need to know your first name and
            last name, as well as your current residential address. By entering
            your date of birth, you verify that you are of legal age to use the
            services of Vbet. It is important for us to have your email address
            so that if you forget your password or want us to send you
            notifications, we will be able to get in touch with you by email.
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">
            Why is it necessary to fill in the passport details?
          </p>

          <p className="text-13px text-white-6">
            This is done for security purposes. You will only be able to
            withdraw any winnings after you present your identification
            document.
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">Where can I see my account number?</p>

          <p className="text-13px text-white-6">
            You can see your account (ID) number, which was given by the company
            in the “My Profile” page, “My Data” section ID: XXXXXXXX
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">
            Do I undertake any obligations by registering on the Vbet website?
          </p>

          <p className="text-13px text-white-6">
            No. Your registration does not bind you in any way and you are not
            obligated to make regular deposits or place a certain number of
            bets. However, by registering you agree to our General Terms and
            Conditions.
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">
            Can I change my personal data after registration?
          </p>

          <p className="text-13px text-white-6">
            Please note that you are unable to change your basic data, such as
            your first name and last name, date of birth, the currency of your
            account in Vbet or the country settings. You will, however, still be
            able to change other data even after registration. In certain
            circumstances (e.g. the personal data was filled incorrectly, etc.),
            Vbet will verify and accept changes to your basic data if you submit
            the corresponding confirming document.
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">
            I don’t want to deposit money right after registration. Do I have
            to?
          </p>

          <p className="text-13px text-white-6">
            You don’t need to make a deposit immediately. You may make a deposit
            whenever you like by using the “Deposit” option.
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">
            What should I do if I have forgotten my password or username?
          </p>

          <p className="text-13px text-white-6">
            Try to restore it on our website using the “Forgot Password?”
            option. In some cases (e.g. if the email address is wrong or if
            there are any technical inaccuracies etc.) it can’t be restored. You
            should contact our support managers.
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">Can anyone else get access to my account?</p>

          <p className="text-13px text-white-6">
            This may happen if you log out from your page without clicking on
            the “Log out” button and closing the page using the exit “X” button.
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">
            What should I do if another person learns my password/username?
          </p>

          <p className="text-13px text-white-6">
            You should immediately inform the support managers about it. We will
            block your account and try to solve the problem.
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>
          <p className="text-base">How do I verify my account?</p>
          <p className="text-base">Proof of identity</p>
          <p className="text-13px text-white-6">
            As proof of identity please provide one of the following:
          </p>

          <ul>
            <li className="text-13px text-white-6">
              Valid passport (full double page)
            </li>
            <li className="text-13px text-white-6">
              Valid identity card (both sides)
            </li>
            <li className="text-13px text-white-6">
              Valid driving license (both sides)
            </li>
            <li className="text-13px text-white-6">
              Valid official residence document
            </li>
          </ul>

          <p className="text-13px text-white-6">
            No other documents can be accepted as proof of identity.
          </p>

          <p>
            <br />
            Proof of address
          </p>

          <p className="text-13px text-white-6">
            As a proof of address please provide a full-page document of one of
            the following:
          </p>

          <ul>
            <li className="text-13px text-white-6">Bank statement</li>
            <li className="text-13px text-white-6">
              Utility bill for landline services such as landline telephone,
              gas, water or electricity
            </li>
            <li className="text-13px text-white-6">Residence certificate</li>
            <li className="text-13px text-white-6">
              Valid driving license (both sides)
            </li>
            <li className="text-13px text-white-6">
              Any official government correspondence certified by local
              authorities.
            </li>
          </ul>

          <p className="text-13px text-white-6">
            <u className="text-13px text-white-6">
              Your document must be dated within the last 3 months.
            </u>
          </p>

          <p>
            <span className="text-base">We cannot accept</span>{" "}
            <span className="text-13px text-white-6">
              any other type of document such as:
            </span>
          </p>

          <ul>
            <li className="text-13px text-white-6">Rent contract</li>
            <li className="text-13px text-white-6">Handwritten contracts</li>
          </ul>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">Please remember:</p>

          <ul>
            <li className="text-13px text-white-6">
              Uploaded copies must be clear, showing all four corners of the
              document.
            </li>
            <li className="text-13px text-white-6">
              The address on your account must be the same as in the provided
              document.
            </li>
          </ul>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-13px text-white-6">
            Please blank out any irrelevant information such as bank balances,
            transactions and card numbers.
          </p>

          <p className="text-13px text-white-6">
            In addition we{" "}
            <em>
              <u className="text-13px text-white-6">might</u>
            </em>{" "}
            ask you to verify the payment methods you are using.
            <br />
            <br />
            &nbsp;
          </p>

          <p className="text-base">
            Proof of payment
            <br />
            <span className="text-13px text-white-6">
              We ask you to verify your payment method by uploading a colour
              screenshot with all relevant details on one page. What we need for
              each payment method is listed below.
            </span>
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">Credit or Debit Card</p>

          <ul>
            <li className="text-13px text-white-6">
              Scan or digital photo of both sides of your card
            </li>
            <li className="text-13px text-white-6">The card must be signed</li>
            <li className="text-13px text-white-6">
              All corners must be visible
            </li>
          </ul>

          <p className="leading-1">
            <span className="text-base">For your own security,</span>{" "}
            <span className="text-13px text-white-6">
              blank out the numbers on your credit card so only the first six
              and last four digits are visible. Also, cover the CVV/CVC digits
              on the back of your card.
            </span>
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">Bank transaction</p>

          <p className="text-13px text-white-6">
            We need to see one of the following, with all corners visible:
          </p>

          <ul>
            <li className="text-13px text-white-6">
              Scan or digital photo of your paper bank statement
            </li>
            <li className="text-13px text-white-6">
              Screenshot of your online account
            </li>
            <li className="text-13px text-white-6">
              Bank statement extracted from your online account
            </li>
          </ul>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">Digital Wallet (Neteller, Skrill, etc)</p>

          <ul>
            <li className="text-13px text-white-6">
              If you are using Skrill or Neteller or similar available wallets,
              upload a screenshot of your full profile page with full name and
              account details visible.
            </li>
          </ul>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">Credit voucher</p>

          <ul>
            <li className="text-13px text-white-6">
              To verify your Paysafecard, we need you to upload a scan of your
              voucher or receipt. Please blank out any sensitive information.
            </li>
          </ul>

          <p>
            <span className="text-base">Important:</span>{" "}
            <span className="text-13px text-white-6">
              {" "}
              You can upload a digital photo or a screenshot of the required
              documents. All files must be in colour and uploaded in one of the
              following formats: JPG, JPEG, PNG, BMP, TIFF, DOC, DOCX or PDF.
              Image quality: min 320dpi. File max size 8Mb. Please make sure all
              information is legible and, to help us process the documents
              faster, give the file a name that describes the type of document
              you’re uploading (eg. ID, proof of address, bank statement, credit
              card).
            </span>
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">Placing Bets and Settlement</p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">How do I place a bet?</p>

          <p className="text-13px text-white-6">
            First, log in with your username and password. Select one or several
            bets from our line-up and use the mouse to click on an estimated
            outcome. Your bet will then appear in the bet slip on the right-
            hand side of the page. Next, specify the amount you wish to stake
            and your preferred type of bet (single, system or chain). In the
            third and final phase, you can either confirm the bet or cancel it.
            Please note that our General Terms and Conditions do not permit the
            cancellation of any bets once they have been placed.
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">What are the types of bets?</p>

          <p className="text-13px text-white-6">
            At Vbet.com you can choose different types of bets. Starting with
            one prediction, you can use the “Single” bet option (single), with
            two or more predictions you can place “Express” bets, and with three
            or more predictions you can place a “System” or “Chain” bet. And if
            you would prefer to place “Single” or “System” bets, you need to
            select the desired option.
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">What is a “Single” bet?</p>

          <p className="text-13px text-white-6">
            A “Single” bet is the simplest form of betting. You predict an
            outcome, specify the desired stake and place the bet. If your
            prediction is correct, you win the bet. The winnings are calculated
            by multiplying the odds by the stake.
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">
            What is an “Express Multiple” bet and how is it calculated?
          </p>

          <p className="text-13px text-white-6">
            “Express Multiple” is a bet consisting of two or more events in
            which a necessary condition is that none of the events should lose.
            “Express Multiple” bets’ total odds are calculated by multiplying
            the odds of all the individual predictions.
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">
            Which bets can be combined to form an “Express Multiple” bet?
          </p>

          <p className="text-13px text-white-6">
            The vast majority of the offered bets may be combined freely in an
            “Express Multiple” bet. There are a few exceptions, however, such as
            certain Formula – 1 bets that can only be placed as “Single” bets.
            The bookmakers decide which bets can be combined, and their decision
            is based on various factors, such as the respective game or the
            event. You will be informed of their decision by the time the bets
            are placed. Please note: several bets on the same event/outcome
            cannot be placed as an “Express Multiple” or “System” bet.
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">
            What is the ”Chain” bet and how is it calculated?
          </p>

          <p className="text-13px text-white-6">
            A “Chain” bet is a combination of “Single” bets on events
            independent of each other. The customer choses the order of the bets
            included in the chain and the unit. The unit stake is placed on the
            first selection as a single. If this generates a return, the unit
            stake is deducted from the winnings and placed on the second
            selection and so on until the chain is complete or all funds are
            lost. If at any stage there is not enough funds on the bet to cover
            the unit stake then the total remaining balance is staked and the
            chain continues.
          </p>

          <p className="text-13px text-white-6">For example:</p>

          <table
            style={{
              width: "100%",
              borderSpacing: "1px",
            }}
          >
            <tbody>
              <tr>
                <td className="h-[32px] px-5px text-white-8 align-middle bg-white-1 text-13px border-1px border-b">
                  Leg
                </td>
                <td className="h-[32px] px-5px text-white-8 align-middle bg-white-1 text-13px border-1px border-b">
                  Event
                </td>
                <td className="h-[32px] px-5px text-white-8 align-middle bg-white-1 text-13px border-1px border-b">
                  Stake
                </td>
                <td className="h-[32px] px-5px text-white-8 align-middle bg-white-1 text-13px border-1px border-b">
                  Odds
                </td>
                <td className="h-[32px] px-5px text-white-8 align-middle bg-white-1 text-13px border-1px border-b">
                  Outcome
                </td>
              </tr>
              <tr>
                <td className="h-[32px] px-5px text-white-8 align-middle bg-white-1 text-13px border-1px border-b">
                  1
                </td>
                <td className="h-[32px] px-5px text-white-8 align-middle bg-white-1 text-13px border-1px border-b">
                  event
                </td>
                <td className="h-[32px] px-5px text-white-8 align-middle bg-white-1 text-13px border-1px border-b">
                  $3
                </td>
                <td className="h-[32px] px-5px text-white-8 align-middle bg-white-1 text-13px border-1px border-b">
                  2
                </td>
                <td className="h-[32px] px-5px text-white-8 align-middle bg-white-1 text-13px border-1px border-b">
                  Win
                </td>
              </tr>
              <tr>
                <td className="h-[32px] px-5px text-white-8 align-middle bg-white-1 text-13px border-1px border-b">
                  2
                </td>
                <td className="h-[32px] px-5px text-white-8 align-middle bg-white-1 text-13px border-1px border-b">
                  event
                </td>
                <td className="h-[32px] px-5px text-white-8 align-middle bg-white-1 text-13px border-1px border-b">
                  &nbsp;
                </td>
                <td className="h-[32px] px-5px text-white-8 align-middle bg-white-1 text-13px border-1px border-b">
                  1.5
                </td>
                <td className="h-[32px] px-5px text-white-8 align-middle bg-white-1 text-13px border-1px border-b">
                  Win
                </td>
              </tr>
              <tr>
                <td className="h-[32px] px-5px text-white-8 align-middle bg-white-1 text-13px border-1px border-b">
                  3
                </td>
                <td className="h-[32px] px-5px text-white-8 align-middle bg-white-1 text-13px border-1px border-b">
                  event
                </td>
                <td className="h-[32px] px-5px text-white-8 align-middle bg-white-1 text-13px border-1px border-b">
                  &nbsp;
                </td>
                <td className="h-[32px] px-5px text-white-8 align-middle bg-white-1 text-13px border-1px border-b">
                  2
                </td>
                <td className="h-[32px] px-5px text-white-8 align-middle bg-white-1 text-13px border-1px border-b">
                  Lose
                </td>
              </tr>
              <tr>
                <td className="h-[32px] px-5px text-white-8 align-middle bg-white-1 text-13px border-1px border-b">
                  4
                </td>
                <td className="h-[32px] px-5px text-white-8 align-middle bg-white-1 text-13px border-1px border-b">
                  event
                </td>
                <td className="h-[32px] px-5px text-white-8 align-middle bg-white-1 text-13px border-1px border-b">
                  &nbsp;
                </td>
                <td className="h-[32px] px-5px text-white-8 align-middle bg-white-1 text-13px border-1px border-b">
                  3
                </td>
                <td className="h-[32px] px-5px text-white-8 align-middle bg-white-1 text-13px border-1px border-b">
                  Win
                </td>
              </tr>
              <tr>
                <td className="h-[32px] px-5px text-white-8 align-middle bg-white-1 text-13px border-1px border-b">
                  5
                </td>
                <td className="h-[32px] px-5px text-white-8 align-middle bg-white-1 text-13px border-1px border-b">
                  event
                </td>
                <td className="h-[32px] px-5px text-white-8 align-middle bg-white-1 text-13px border-1px border-b">
                  &nbsp;
                </td>
                <td className="h-[32px] px-5px text-white-8 align-middle bg-white-1 text-13px border-1px border-b">
                  1.5
                </td>
                <td className="h-[32px] px-5px text-white-8 align-middle bg-white-1 text-13px border-1px border-b">
                  Lose
                </td>
              </tr>
            </tbody>
          </table>

          <p className="text-13px text-white-6">
            As a result of the first event ~ $6 is generated, from which ~ $3 is
            transferred to the next event as the sum of the bet. And ~ $3 is
            transferred to the “chain account”. From the second event being won
            ~$4.50 is generated, from which ~ $3 is transferred as a bet sum for
            the next event, and the remaining ~$1.50 is transferred to the
            “chain account” and the sum is ~ $4.50. As the third event is lost,
            ~ $3 is taken from the chain account for the fourth event, and only
            ~ $1.5 remains in the account. After the win fourth event is won ~
            $9 is generated, ~ $3 of this sum is transferred as the bet sum for
            the fifth event and ~ $6 is added to the “chain account”, and the
            sum of the chain account becomes ~ $7.50. The fifth event is lost;
            this means that the winnings of this chain are ~ $7.50, the same
            amount as in the “chain account”.
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">
            What is the “System” bet? How is it calculated and how much is the
            minimum sum of each bet?
          </p>

          <p className="text-13px text-white-6">
            “System” is a bet which consists of at least three events. The
            program forms variants of the events you have selected. For example,
            if you select a 2/5 system, it means that at least 2 events from 5
            must win for the bet to win. The minimum sum of each bet depends on
            the selection of the system.
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">What is a “Handicap”?</p>

          <p className="text-13px text-white-6">
            A handicap is a head start given to a selection expressed in
            goals/points/sets/frames etc. depending on the type of the
            competition. The handicap is offered by the bookmaking company and
            it can be “positive” (1), “negative” (-1) and “zero”. For example,
            if you made a bet on “Handicap 1(2)” on a football match, this means
            you allowed Team 1 a 2 - goal ‘head start’.
          </p>

          <ul>
            <li className="text-13px text-white-6">
              If the match ends 1-1, then adding the handicap will produce a
              score of 3-1 and the bet will win.
            </li>
            <li className="text-13px text-white-6">
              If the match ends 0-3, then adding the handicap will produce a
              score of 2-3 and the bet will lose.
            </li>
            <li className="text-13px text-white-6">
              If the match ends 0-2, then adding the handicap will produce a
              score of 2-2 and the bet will result in a push (stakes returned).
            </li>
            <li className="text-13px text-white-6">
              If the handicap is “negative”, you need to subtract rather than
              add.
            </li>
          </ul>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">
            Here are a few other examples of a handicap:
          </p>

          <ul>
            <li className="text-13px text-white-6">
              Bet W1 Handicap (-1) can win only when the home team wins the
              match by two goals.
            </li>
            <li className="text-13px text-white-6">
              Bet W2 Handicap (1) can win only when the away team does not lose
              the match (draw or victory of the away team).
            </li>
            <li className="text-13px text-white-6">
              Bet X Handicap (1) can win only when the home team wins the match
              by one goal (or when the away team loses by one goal).
            </li>
            <li className="text-13px text-white-6">
              Bet X Handicap (-1) can win only when the home team loses the
              match by one goal (if the away team wins by one goal).
            </li>
            <li className="text-13px text-white-6">
              Bet W1 Handicap (-2) can win only when the home team wins the
              match by three goals. Bet W2 Handicap (2) can win only in the
              following result of the match:
            </li>
          </ul>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-13px text-white-6">A draw</p>

          <p className="text-13px text-white-6">
            The victory of the home team by one goal
          </p>

          <p className="text-13px text-white-6">
            Any victory by the away team.
          </p>

          <ul>
            <li className="text-13px text-white-6">
              Bet X Handicap (2) can win only when the home team wins by two
              goals.
            </li>
            <li className="text-13px text-white-6">
              Bet X Handicap (-2) can win only when the home team loses by two
              goals (or the away team wins by two goals).
            </li>
          </ul>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">What is a “Hattrick”?</p>

          <p className="text-13px text-white-6">
            A “Hattrick” bet means that one of the players of the two teams
            should score three or more goals during the match.
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">
            What do W1/W2, W1/X, X/W2 and other bets mean?
          </p>

          <p className="text-13px text-white-6">
            This type of bet is halftime/fulltime betting, the first symbol
            shows the result of the first half, and the second symbol shows the
            result of the game. For example, W1/W2 bet means that the first team
            has won in the first half but the second team has won in the total
            game. W1/X bet means that the first team has won in the first half,
            and the overall game has ended in a draw.
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">
            When I try to place a bet, I get a message that I have exceeded the
            winnings limit. How high is the winnings limit?
          </p>

          <p className="text-13px text-white-6">
            Vbet reserves the right to set various betting limits for all
            events, markets and selections. You will be informed of any limits
            when you place your bet.
          </p>

          <p className="text-13px text-white-6">
            There are various reasons for setting a winnings limit, including
            the supply and demand for a bet. Please note that winnings limits
            may also be lowered for a short time when odds are updated.
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">
            What is the minimum/maximum size of the bet?
          </p>

          <p className="text-13px text-white-6">
            The maximum amount of one bet is defined by the maximum amount of
            the winnings specified above. When choosing a bet, if you have
            received a message that the amount of your bet exceeds the maximum
            amount, reduce the amount of the bet accordingly. The minimum amount
            of a bet is 0.10 Euro.
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">
            What is the maximum odds for express or system bets?
          </p>

          <p className="text-13px text-white-6">
            The maximum odds for express and each variant for system bet is
            1000. Bets that exceed 1000, are calculated at 1000 odds.
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">
            How it is possible to remove selections chosen by me from the
            coupon?
          </p>

          <p className="text-13px text-white-6">
            Selections can be removed before placement of the bet by clicking
            directly on the “X” button on the right side of the betslip.
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">
            I have placed a bet by mistake. Can I ask for my bet to be
            cancelled?
          </p>

          <p className="text-13px text-white-6">
            Unfortunately, in accordance with the Terms and Conditions we are
            not allowed to cancel bets once they have been placed. According to
            our General Terms and Conditions, a bet is considered to be placed
            as soon as it is displayed in your betting account in “My bets”.
          </p>

          <p className="text-13px text-white-6">
            Before you confirm a bet, you can cancel it in the betslip and not
            place the bet. However, once you have confirmed the bet in the
            betslip your bet is accepted and can no longer be cancelled.
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">
            How can I check whether my bet has been accepted?
          </p>

          <p className="text-13px text-white-6">
            As soon as you have confirmed the bet in the coupon, by pressing the
            button “Place a Bet”, you will receive a confirmation of acceptance
            if the bet has been placed successfully. Each bet that you place
            will appear in your betting account in "My Bets".
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">
            In what circumstances are bets cancelled by the operator?
          </p>

          <p className="text-13px text-white-6">
            Bets are cancelled if there is an inaccuracy in the names of players
            or teams, if the wrong odds are offered, if a wrong total is quoted,
            if a a wrong handicap is quoted, etc. In these instances the bets
            are void.
          </p>

          <p className="text-base">
            What happens in the event of match postponement/cancellation?
          </p>

          <p className="text-13px text-white-6">
            The bet is settled as void depending on the individual sport in our
            Rules. In the case of an “Express” or “System” bet the selection is
            considered void.
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">
            How is a football match settled if the match ended in extra time or
            a penalty shoot-out?
          </p>

          <p className="text-13px text-white-6">
            All football bets are settled only for the 90-minute result
            (full-time), excluding extra time and penalty shoot-outs, unless
            otherwise stipulated by Vbet.com. According to Vbet’s rules,
            full-time includes any stoppage time during the 90 minutes.
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">
            How are two yellow cards given to a player settled?
          </p>

          <p className="text-13px text-white-6">
            The second yellow card leading to the player’s dismissal is
            considered to be red, which means the player has one yellow card and
            one red card.
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">How is a basketball game settled?</p>

          <p className="text-13px text-white-6">
            The results for all bets on the game are made taking into account
            overtime, unless stated otherwise. One exception is the bets on the
            winner of the match, where a “draw” is offered in regular time, not
            taking into account the overtime.
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">How is a hockey match settled?</p>

          <p className="text-13px text-white-6">
            The bets on National and International Ice Hockey championships, are
            settled according to the official time of the matches, unless
            otherwise stated.
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">
            How is a bet settled if a tennis player refuses to continue the
            game?
          </p>

          <p className="text-13px text-white-6">
            If a tennis player refuses to continue the game (or is
            disqualified), then in all the following games and sets he/she is
            considered to be defeated, and bet settlement is made according to
            the subsequent results.
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">
            Do I get back my money if the match did not take place as planned?
          </p>

          <p className="text-13px text-white-6">
            If the match is interrupted for more than 24 hours, all bets are
            returned, except for those, where the result was determined.
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">
            Why is the calculation of my bets delayed?
          </p>

          <p className="text-13px text-white-6">
            Calculation is usually made as quickly as possible. The settlement
            of online games is made immediately during the game; the settlement
            of offline games will be made as soon as a game ends, regardless of
            the bet type. But settlement can be sometimes delayed due to various
            reasons: the absence of information about the results, the same
            event with different information on various websites, technical
            problems, etc.
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">
            What should I do if my bet is calculated incorrectly?
          </p>

          <p className="text-13px text-white-6">
            You should contact the Live Support department. Our support staff
            will check your bet, and if the bet is calculated incorrectly, the
            mistake will be corrected and your winnings will be added to your
            account.
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">
            What is the minimum number of minutes an interrupted match is played
            to be considered as completed for betting purposes?
          </p>

          <p className="text-13px text-white-6">
            Matches are considered to be completed for betting purposes, if they
            have been interrupted and not finished in the official time
            specified in points 6 and 7 of the Terms and Conditions, and if the
            time played is at least the following:
          </p>

          <ul>
            <li className="text-13px text-white-6">Soccer – 90 min</li>
            <li className="text-13px text-white-6">
              Futsal (duration 2 x 20 minutes.) - 35 minutes
            </li>
            <li className="text-13px text-white-6">
              Futsal (duration 2 x 25 minutes.) - 45 minutes
            </li>
            <li className="text-13px text-white-6">
              Basketball NBA (National Basketball Association) – 43 min
            </li>
            <li className="text-13px text-white-6">Eurobasketball – 35 min</li>
            <li className="text-13px text-white-6">
              Hockey NHL (National Hockey League) – 55 min
            </li>
            <li className="text-13px text-white-6">Bandy – 60 min.</li>
            <li className="text-13px text-white-6">Eurohockey – 50 min</li>
            <li className="text-13px text-white-6">
              American football – 55 min
            </li>
            <li className="text-13px text-white-6">
              Baseball- 5 periods (innings) Handball – 50 min.
            </li>
          </ul>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">
            What happens to my bet if a match or event is postponed?
          </p>

          <p className="text-13px text-white-6">
            If the event does not take place as scheduled or if the official
            score of the match is not announced and is not resumed within 24
            hours, all bets will be declared void, refunded and transferred to
            your account. If this match is included in your "express bet" or
            “system bet”, the odds for this selection will be settled at 1.0.
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">
            How can I check the result of my preferred game?
          </p>

          <p className="text-13px text-white-6">
            As we settle bets according to the data of the official websites,
            you can find the list of official websites under point 20.3 of the
            Terms and Conditions.
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">“Live” bets</p>

          <p className="text-13px text-white-6">
            Our Live bets will keep you in suspense until the end of the sports
            event. Hundreds of fans simultaneously make bets in real time. The
            odds of bets are dynamic and change depending on the course of the
            sports event. Simultaneously, detailed information, such as the
            expired time, the current score, quantity of the yellow and red
            cards shown, etc. is displayed in real time. Live bets are available
            not only for soccer games but also for other sports events, such as
            tennis, Formula 1, American football, ice hockey, skiing, etc.
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">
            Why has the acceptance of my bet been delayed or interrupted?
          </p>

          <p className="text-13px text-white-6">
            This may occur because of the following reasons:
          </p>

          <ul>
            <li className="text-13px text-white-6">
              Technical problems (interruption of the broadcast during (live)
              games, software failure, power cuts, etc.).
            </li>
            <li className="text-13px text-white-6">Busy time periods.</li>
            <li className="text-13px text-white-6">
              High level of interest in a sports game/match or an event.
            </li>
            <li className="text-13px text-white-6">
              Congestion of a network provider.
            </li>
            <li className="text-13px text-white-6">
              Speed of completion of the sport or event. For example, a tennis
              game is an event with a very fast outcome, the quantity of bets is
              high, therefore changes in odds are frequent.
            </li>
          </ul>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">Why was my bet registered twice?</p>

          <p className="text-13px text-white-6">
            This can happen only if you pressed the button twice. Please take
            care when placing bets.
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">
            Why have the odds on an event been suspended ahead of start time?
          </p>

          <p className="text-13px text-white-6">
            Suspension of odds could happen for any of the reasons in 2 above.
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">
            How accurate is the data given on the Live matches on your website?
          </p>

          <p className="text-13px text-white-6">
            Every effort is made to ensure that this information is up to date
            and correct. However, it should only be considered as a guide when
            betting.
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">
            Why is my limit on the (live) bet reduced?
          </p>

          <p className="text-13px text-white-6">
            Vbet reserves the right to reduce the limit of all or some players.
            Vbet is not obliged to provide an explanation concerning these
            decisions and reserves the right to block some players from using
            its services.
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">Casino</p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">How do I create a Casino account?</p>

          <p className="text-13px text-white-6">
            Playing in the Vbet Casino requires a Vbet Account. If you do not
            already have one, just click on the “Register” button on the Casino
            page and follow the simple registration process.
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">
            How do I make a deposit in the online casino?
          </p>

          <p className="text-13px text-white-6">
            Once logged in, hover on your profile pic on the top of your screen,
            then press “Deposit” button and select your desired amount and
            payment method.
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">
            How do I view what games I’ve played last?
          </p>

          <p className="text-13px text-white-6">
            Once logged in, you can view a Last Played Games using the
            appropriate icons on the bottom of the Casino page.
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">What is a Random Number Generator (RNG)?</p>

          <p className="text-13px text-white-6">
            A Random Number Generator (RNG) is a computer program which randomly
            produces the results for our online casino games. Every individual
            card dealt, dice rolled, or any other pertinent game action is
            produced by the program without any unrealistic duplication or
            predictability.
          </p>

          <p className="text-13px text-white-6">
            As the results are generated in a completely random manner with no
            possibility of manipulation, you always get fair results.
          </p>

          <p className="text-13px text-white-6">&nbsp;</p>

          <p className="text-base">
            What kind of games can I play online at the Vbet Casino?
          </p>

          <p className="text-13px text-white-6">
            Vbet offers a wide selection of games to our players. You can find
            many different 3D games, Table games, a huge variety of Slot games,
            and even Live games including Blackjack, Roulette, Baccarat and Bet
            on Poker.
          </p>
        </div>
      </Drawer>
    </div>
  );
}

export default FAQ;
