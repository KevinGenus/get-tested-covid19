import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import DocumentMeta from 'react-document-meta';
import Link from 'components/Link/Link.js';
import DemoNavbar from 'components/Navbars/DemoNavbar.js';
import SimpleFooter from 'components/Footers/SimpleFooter.js';

const displayHeading = () => (
  <Container className="py-lg-md d-flex">
    <div className="col px-0">
      <Row>
        <Col lg="8">
          <h1 className="display-3 text-white mt-3">
            How Does COVID-19 Testing Work?
          </h1>
        </Col>
        <Col lg="8">
          <p className="text-white">
            In the United States, the availability of COVID-19 testing varies.
            The number of sites differs by state, and the process can be
            different for individual sites. On this page, we’ll be sharing the
            basic information you need to know about how COVID-19 testing works.
          </p>
        </Col>
      </Row>
    </div>
  </Container>
);

const displaySubHeading = ({ title, sections }) => {
  return (
    <Row>
      <Col lg="8">
        <h1 className="display-3 mt-3">{title}</h1>
        {displaySubHeadingSections(sections)}
      </Col>
    </Row>
  );
};

const displaySubHeadingSections = (sections) => {
  return sections.map((section) => {
    const { title, content } = section;
    return (
      <div>
        <h4>{title}</h4>
        <div>{content}</div>
      </div>
    );
  });
};

const displayCDCNotice = () => {
  return (
    <Row>
      <Col>
        <h5>
          Please note: Per the CDC, If you develop any of these emergency
          warning signs* for COVID-19, get medical attention immediately:
        </h5>
        <ul>
          <li>Trouble breathing</li>
          <li>Persistent pain or pressure in the chest</li>
          <li>New confusion or inability to arouse</li>
          <li>Bluish lips or face</li>
        </ul>
        <p>
          *This list is not all inclusive. Please consult your medical provider
          for any other symptoms that are severe or concerning to you.
        </p>
        <p>
          Call 911 if you have a medical emergency: Notify the operator that you
          have, or think you might have, COVID-19. If possible, put on a cloth
          face covering before medical help arrives.
        </p>
      </Col>
    </Row>
  );
};

const displayBeforeTesting = () => {
  const subHeadingContent = {
    title: 'Before Testing',
    sections: [
      {
        title: 'Who should get tested?',
        content: [
          <p>
            Your first step should be to{' '}
            <Link
              href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/testing.html"
              target="_blank"
            >
              ensure you qualify for a COVID-19 test
            </Link>
            .
          </p>,
          <p>
            Many testing centers require a doctor screening and an appointment
            before arrival. Some are limited to certain groups of the population
            (like people over 65) or people exhibiting certain symptoms (like a
            fever).
          </p>,
        ],
      },
      {
        title: 'Where are COVID-19 testing centers?',
        content: [
          <p>
            Visit our database to find your nearest COVID-19 testing center.
            Just search your zip code and you’ll see a list of local testing
            sites with details and general requirements for each site.', 'Call
            or check the center’s website to make sure you meet their
            requirements, such as being pre-screened by a health clinician or
            scheduling an appointment.
          </p>,
        ],
      },
      {
        title: 'How do I prepare for my test?',
        content: [
          <p>
            If you meet the testing center’s requirements, bring your photo ID,
            your insurance card, and a pen with you.
          </p>,
          <p>
            Some sites may ask people to refrain from taking fever-reducing
            medications or eating before the test as well as limiting the number
            of people in the vehicle with you.
          </p>,
        ],
      },
      {
        title: 'Do I have to pay for a COVID-19 test?',
        content: [
          <p>No. Insurance companies are waiving fees for COVID-19 testing.</p>,
          <p>
            Thanks to the{' '}
            <Link
              href="https://appropriations.house.gov/sites/democrats.appropriations.house.gov/files/Families%20First%20summary.pdf"
              target="_blank"
            >
              Families First Coronavirus Response Act
            </Link>
            , states can expand Medicaid coverage for uninsured individuals so
            that they may receive free COVID-19 diagnostics and testing. If you
            are uninsured, it’s important to know that the legislation does not
            extend to the coverage of COVID-19 treatment. Check to see if your
            state has expanded or opened special enrollment periods for health
            insurance.
          </p>,
        ],
      },
    ],
  };
  return displaySubHeading(subHeadingContent);
};

const displayTestingCenters = () => {
  const subHeadingContent = {
    title: 'Testing Centers',
    sections: [
      {
        title: 'Where are COVID-19 tests administered?',
        content: [
          <p>
            If you do qualify for a COVID- 19 test, you will likely visit either
            a drive - thru or in -facility testing site.Drive - thru testing is
            the most common and proven to be a quick and safe procedure for both
            people receiving a test and the medical professionals administering
            them.
          </p>,
          <p>
            The increased testing capacity (300 to 500 tests per day) of
            drive-thru centers also helps alleviate the strain on clinics,
            doctors’ offices, and especially hospitals.
          </p>,
        ],
      },
      {
        title: 'What is the drive-thru testing process?',
        content: [
          <p>
            A drive-thru center allows you to remain in your vehicle as the test
            is performed. You’ll be asked to roll your window down, turn off
            your car, and present your photo ID and insurance card, if you have
            one, for a picture. When you reach the front of the line, a medical
            professional will approach your car and take your sample through the
            open window.
          </p>,
        ],
      },
      {
        title: 'What is the in-facility testing process?',
        content: [
          <p>
            An in-facility testing site would require you to a local clinic,
            doctor’s office, hospital, or other location. If your testing site
            is a facility,{' '}
            <Link
              href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/social-distancing.html"
              target="_blank"
            >
              follow CDC guidelines{' '}
            </Link>{' '}
            like social distancing and face-covering while around others. You
            will likely be asked to present your license and insurance card if
            you have one.
          </p>,
        ],
      },
    ],
  };

  return displaySubHeading(subHeadingContent);
};

const displayHowTestingWorks = () => {
  const subHeadingContent = {
    title: 'How Testing Works',
    sections: [
      {
        title: 'What is a COVID-19 test?',
        content: [
          <p>
            Many testing centers follow{' '}
            <Link
              href="https://www.cdc.gov/coronavirus/2019-ncov/lab/guidelines-clinical-specimens.html"
              target="_blank"
            >
              the CDC guidelines
            </Link>{' '}
            and administer a{' '}
            <Link
              href="http://www.hss.gov.yk.ca/pdf/npswab.pdf"
              target="_blank"
            >
              nasopharyngeal test
            </Link>
            . This is a quick, painless test used to detect an ongoing
            respiratory infection, including in asymptomatic people
          </p>,
          <p>
            Here’s how it generally works:
            <ul>
              <li>
                They’ll ask you to cough or blow your nose away from them and
                then tilt your head back.
              </li>
              <li>
                They will then gently pass a flexible swab several centimeters
                along the floor of your nose, slowly rotating it to collect a
                secretion from your nasopharynx, which covers the roof of your
                mouth.
              </li>
              <li>
                They will collect one or two samples from you with a nasal or
                throat swab. This process only takes 5-10 minutes.
              </li>
            </ul>
          </p>,
          <p>
            While ultimately relatively painless, during a nasopharyngeal swab
            you may gag or feel a sense of pressure or discomfort, but it’s
            important to remain still. Afterward, your nose might even feel
            irritated or bleed slightly. A humidifier or warm shower can help
            ease those symptoms.
          </p>,
          <div>
            <p>
              If a testing center is unable to collect a nasopharyngeal culture,
              the CDC outlines a few alternative test options:
            </p>
            <ul>
              <p>
                <li>
                  An oral throat swab (or oropharyngeal specimen collection)
                  Similar to a nasopharyngeal test, this test takes a sample
                  using a swab. In this case, a collection is taken directly
                  from your posterior pharynx, which is at the top of your
                  throat. Nasopharynx cultures are preferred because, on
                  average, the nasopharynx has a higher count of a virus’s RNA
                  and can provide a more accurate sample.
                </li>
                <li>
                  A nasal mid-turbinate swab If you are symptomatic (fever, dry
                  cough, or shortness of breath), a nasal mid-turbinate swab may
                  be administered. In this test, a swab is gently inserted into
                  your nose but stops short of the nasopharynx.
                </li>
                <li>
                  An anterior nares specimen collection Another test that may be
                  administered if you are symptomatic is an anterior nares
                  collection. This test simply requires a swab of each nostril.
                </li>
              </p>
            </ul>
            <p>
              Note: The FDA has recently approved a test for coronavirus
              antibodies. With a finger prick of blood, doctors would be able to
              determine if a patient has ever been exposed to COVID-19 and has
              since developed some level of immunity. Antibody tests are
              currently used in a handful of countries.
            </p>
            <p>
              When available, this test should give scientists a more accurate
              understanding of how many people are infected as well as the
              virus’s death rate. An antibody test is not the preferred test to
              determine if you have COVID-19 because the body doesn’t
              immediately produce them and may not until after your body has
              recovered from the illness.
            </p>
          </div>,
        ],
      },
      {
        title: 'How long does a COVID-19 test take?',
        content: [
          <p>
            They will collect one or two samples from you with a nasal or throat
            swab. This process only takes 5-10 minutes.
          </p>,
          <p>
            While the collection process is relatively quick, be prepared for
            lengthy on-site wait times. This is especially likely if you live in
            a big city or your testing site doesn’t require scheduled
            appointments. Drive-thru testing sites will likely not have bathroom
            facilities so plan ahead for that, too.
          </p>,
        ],
      },
      {
        title: 'How are COVID-19 test results determined?',
        content: [
          <p>
            Your COVID-19 testing sample will be sent to a lab and loaded into a
            standard reaction vial. Then it will be placed on a dish and mixed
            with a reagent, a cocktail of chemicals that helps the lab identify
            a virus’s RNA. That viral genome is then replicated thousands,
            millions, sometimes even billions of times to identify the possible
            presence of the virus.
          </p>,
        ],
      },
    ],
  };

  return displaySubHeading(subHeadingContent);
};

const displayAfterTesting = () => {
  const subHeadingContent = {
    title: 'After Testing',
    sections: [
      {
        title: 'When will I get my test results?',
        content: [
          <p>
            Currently, lab testing is not performed at most drive-thru sites.
            Though, this may change depending on{' '}
            <Link
              href="https://www.bloomberg.com/news/articles/2020-03-27/abbott-launches-5-minute-covid-19-test-for-use-almost-anywhere"
              target="_blank"
            >
              {' '}
              new testing technology becoming available.
            </Link>{' '}
            As it stands now, your sample(s) will then be sent to a lab for
            testing. Testing turnaround times are continuing to improve after
            the CDC improved their testing kit and the FDA approved large
            commercial labs to begin testing.
          </p>,
          <p>
            Including transit times, your test results should ideally be
            available within 24 to 48 hours. However, depending on the lab’s
            capacity, it may take up to a week to get your results back. Your
            testing site will have instructions on how to access your test
            results.
          </p>,
        ],
      },
      {
        title: 'What happens if your COVID-19 test comes back positive?',
        content: [
          <p>
            Follow{' '}
            <Link
              href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/index.html"
              target="_blank"
            >
              the CDC's guidelines
            </Link>{' '}
            for actions to take if you are sick or tested positive for COVID-19.
            This will help you manage your health and prevent the spread of
            infection in your household and community.
          </p>,
          <p>
            The primary guidelines include entering self-isolation, covering
            your nose and mouth around others, and monitoring your symptoms.
            Consult your primary care doctor and the{' '}
            <Link
              href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html"
              target="_blank"
            >
              CDC’s self-checker
            </Link>{' '}
            to determine if and when you should go to a hospital, if at all.
          </p>,
        ],
      },
      {
        title: 'What happens if your COVID-19 test comes back negative? ',
        content: [
          <p>
            That doesn’t put you in the clear. It means you probably were not
            infected at the time of the test. It could also mean it was very
            early in your infection and you could test positive if administered
            another test later.
          </p>,
          <p>
            If you test negative, it is important to continue practicing
            physical distancing, washing your hands frequently, disinfecting
            frequently used surfaces, and following the rest of the{' '}
            <Link
              href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/index.html"
              target="_blank"
            >
              guidelines for preventing the spread of COVID-19
            </Link>{' '}
            and getting sick yourself.
          </p>,
        ],
      },
      {
        title: 'Why is testing important? ',
        content: [
          <p>
            <Link
              href="https://www.healthaffairs.org/do/10.1377/hblog20200406.55720/full/"
              target="_blank"
            >
              Free, widespread testing will play an enormous role in the ability
              to contain COVID-19
            </Link>
            . South Korea stands a benchmark for{' '}
            <Link
              href="https://www.visualcapitalist.com/infection-trajectory-flattening-the-covid19-curve/"
              target="_blank"
            >
              testing capacity and thus their ability to limit infection rates
            </Link>
            . Until widespread testing is available in the US, it’s important to
            stay informed about what services are available to you.
          </p>,
          <p>
            That’s why we created{' '}
            <Link href="http://get-tested-covid19.org/" target="_blank">
              Get Tested COVID-19
            </Link>
            . We want it to be as simple as possible to find your nearest
            testing site and have all of the information to get tested safely.
            As more testing centers open and can facilitate more people being
            tested (with fewer requirements), we want to help support
            communities getting tested across the US.
          </p>,
          <div>
            <p>Sources</p>
            <ul>
              <li>
                <Link
                  href="https://medlineplus.gov/ency/article/003747.htm"
                  target="_blank"
                >
                  https://medlineplus.gov/ency/article/003747.htm
                </Link>
              </li>
              <li>
                <Link
                  key="https://www.cdc.gov/coronavirus/2019-ncov/lab/guidelines-clinical-specimens.html"
                  href="https://www.cdc.gov/coronavirus/2019-ncov/lab/guidelines-clinical-specimens.html"
                  target="_blank"
                >
                  https://www.cdc.gov/coronavirus/2019-ncov/lab/guidelines-clinical-specimens.html
                </Link>
              </li>
              <li>
                <Link
                  key="http://www.hss.gov.yk.ca/pdf/npswab.pdf"
                  href="http://www.hss.gov.yk.ca/pdf/npswab.pdf"
                  target="_blank"
                >
                  http://www.hss.gov.yk.ca/pdf/npswab.pdf
                </Link>
              </li>
              <li>
                <Link
                  key="http://www.msdh.state.ms.us/msdhsite/index.cfm/14,8501,420,694,pdf/COVID-19_Specimen_Collection.pdf"
                  href="http://www.msdh.state.ms.us/msdhsite/index.cfm/14,8501,420,694,pdf/COVID-19_Specimen_Collection.pdf"
                  target="_blank"
                >
                  http://www.msdh.state.ms.us/msdhsite/index.cfm/14,8501,420,694,pdf/COVID-19_Specimen_Collection.pdf
                </Link>
              </li>
              <li>
                <Link
                  key="https://www.healthline.com/health/nasopharyngeal-culture#procedure"
                  href="https://www.healthline.com/health/nasopharyngeal-culture#procedure"
                  target="_blank"
                >
                  https://www.healthline.com/health/nasopharyngeal-culture#procedure
                </Link>
              </li>
              <li>
                <Link
                  key="https://www.cdc.gov/urdo/downloads/SpecCollectionGuidelines.pdf"
                  href="https://www.cdc.gov/urdo/downloads/SpecCollectionGuidelines.pdf"
                  target="_blank"
                >
                  https://www.cdc.gov/urdo/downloads/SpecCollectionGuidelines.pdf
                </Link>
              </li>
              <li>
                <Link
                  key="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/testing.html"
                  href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/testing.html"
                  target="_blank"
                >
                  https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/testing.html
                </Link>
              </li>
              <li>
                <Link
                  key="https://www.npr.org/sections/health-shots/2020/03/28/822869504/why-it-takes-so-long-to-get-most-covid-19-test-results"
                  href="https://www.npr.org/sections/health-shots/2020/03/28/822869504/why-it-takes-so-long-to-get-most-covid-19-test-results"
                  target="_blank"
                >
                  https://www.npr.org/sections/health-shots/2020/03/28/822869504/why-it-takes-so-long-to-get-most-covid-19-test-results
                </Link>
              </li>
              <li>
                <Link
                  key="https://www.fda.gov/medical-devices/emergency-situations-medical-devices/emergency-use-authorizations#covid19ivd"
                  href="https://www.fda.gov/medical-devices/emergency-situations-medical-devices/emergency-use-authorizations#covid19ivd"
                  target="_blank"
                >
                  https://www.fda.gov/medical-devices/emergency-situations-medical-devices/emergency-use-authorizations#covid19ivd
                </Link>
              </li>
              <li>
                <Link
                  key="https://www.verywellhealth.com/turbinates-types-purpose-and-disorders-1192107"
                  href="https://www.verywellhealth.com/turbinates-types-purpose-and-disorders-1192107"
                  target="_blank"
                >
                  https://www.verywellhealth.com/turbinates-types-purpose-and-disorders-1192107
                </Link>
              </li>
              <li>
                <Link
                  key="https://www.bloomberg.com/news/articles/2020-03-27/abbott-launches-5-minute-covid-19-test-for-use-almost-anywhere"
                  href="https://www.bloomberg.com/news/articles/2020-03-27/abbott-launches-5-minute-covid-19-test-for-use-almost-anywhere"
                  target="_blank"
                >
                  https://www.bloomberg.com/news/articles/2020-03-27/abbott-launches-5-minute-covid-19-test-for-use-almost-anywhere
                </Link>
              </li>
              <li>
                <Link
                  key="https://www.kff.org/uninsured/fact-sheet/what-issues-will-uninsured-people-face-with-testing-and-treatment-for-covid-19"
                  href="https://www.kff.org/uninsured/fact-sheet/what-issues-will-uninsured-people-face-with-testing-and-treatment-for-covid-19"
                  target="_blank"
                >
                  https://www.kff.org/uninsured/fact-sheet/what-issues-will-uninsured-people-face-with-testing-and-treatment-for-covid-19
                </Link>
              </li>
              <li>
                <Link
                  key="https://www.medicinenet.com/how_do_the_covid-19_coronavirus_tests_work/article.htm"
                  href="https://www.medicinenet.com/how_do_the_covid-19_coronavirus_tests_work/article.htm"
                  target="_blank"
                >
                  https://www.medicinenet.com/how_do_the_covid-19_coronavirus_tests_work/article.htm
                </Link>
              </li>
              <li>
                <Link
                  key="https://www.nbcnews.com/health/health-news/coronavirus-testing-information-covid-19-tests-according-state-health-departments-n1158041"
                  href="https://www.nbcnews.com/health/health-news/coronavirus-testing-information-covid-19-tests-according-state-health-departments-n1158041"
                  target="_blank"
                >
                  https://www.nbcnews.com/health/health-news/coronavirus-testing-information-covid-19-tests-according-state-health-departments-n1158041
                </Link>
              </li>
            </ul>
          </div>,
        ],
      },
    ],
  };

  return displaySubHeading(subHeadingContent);
};

export default () => {
  const meta = {
    title: 'How Testing Works',
    description:
      'In the United States, the availability of COVID-19 testing varies. The number of sites differs by state, and the process can be different for individual sites. On this page, we’ll be sharing the basic information you need to know about how COVID-19 testing works.',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'COVID-19, testing centers, novel coronavirus',
      },
    },
  };
  return (
    <DocumentMeta {...meta}>
      <DemoNavbar />
      <section className="section section-lg section-shaped pb-100">
        <div className="shape shape-style-1 shape-default">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        {displayHeading()}
      </section>
      <Container>
        <Row>
          <Col sm={8} className={{ background: 'red' }}>
            <div>
              {displayBeforeTesting()}
              {displayTestingCenters()}
              {displayHowTestingWorks()}
              {displayAfterTesting()}
            </div>
          </Col>
          <Col sm={4}>
            <div>{displayCDCNotice()}</div>
          </Col>
        </Row>
      </Container>

      <SimpleFooter />
    </DocumentMeta>
  );
};
