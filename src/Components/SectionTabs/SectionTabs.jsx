import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import img6 from "./img/service-1.jpg";
import img7 from "./img/service-2.jpg";
import img8 from "./img/service-3.jpg";
import img9 from "./img/service-4.jpg";
import "./SectionTabs.css";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <section id="tabs">
        <div className="container">
          <Box
            sx={{
              flexGrow: 1,
              bgcolor: "background.paper",
              display: "flex",
              height: 270,
            }}
          >
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{
                borderRight: 1,
                borderColor: "divider",
              }}
            >
              <Tab label="Диагностика" {...a11yProps(0)}></Tab>

              <Tab label="Обслуживание Двигателя" {...a11yProps(1)} />
              <Tab label="Замена Шин" {...a11yProps(2)} />
              <Tab label="Замена Масла" {...a11yProps(3)} />
            </Tabs>
            <TabPanel value={value} index={0}>
              <div className="tabs-wrapper">
                <div className="tabs-first">
                  <img src={img6} alt="service" />
                </div>
                <div className="tabs-second">
                  <div>
                    <h3>15 Лет Опытa в Автосервисе</h3>
                    <p>
                      Мы предоставляем высококачественные услуги по диагностике
                      вашего автомобиля, используя самые современные технологии
                      и оборудование.
                    </p>
                  </div>
                  <div>
                    <img src="" alt="" />
                    <p>Качественное Обслуживание</p>
                  </div>
                  <div>
                    <img src="" alt="" />
                    <p>Опытные Специалисты</p>
                  </div>
                  <div>
                    <img src="" alt="" />
                    <p>Современное Оборудование</p>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div className="tabs-wrapper">
                <div className="tabs-first">
                  <img src={img7} alt="service" />
                </div>
                <div className="tabs-second">
                  <div>
                    <h3>15 Лет Опытa в Автосервисе</h3>
                    <p>
                      Наши специалисты готовы предложить вам комплексное
                      обслуживание двигателя, чтобы ваш автомобиль всегда
                      работал на максимальной производительности.
                    </p>
                  </div>
                  <div>
                    <img src="" alt="" />
                    <p>Качественное Обслуживание</p>
                  </div>
                  <div>
                    <img src="" alt="" />
                    <p>Опытные Специалисты</p>
                  </div>
                  <div>
                    <img src="" alt="" />
                    <p>Современное Оборудование</p>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <div className="tabs-wrapper">
                <div className="tabs-first">
                  <img src={img8} alt="service" />
                </div>
                <div className="tabs-second">
                  <div>
                    <h3>15 Лет Опытa в Автосервисе</h3>
                    <p>
                      Мы предлагаем профессиональную замену шин, чтобы ваш
                      автомобиль был безопасен на дороге при любых погодных
                      условиях.
                    </p>
                  </div>
                  <div>
                    <img src="" alt="" />
                    <p>Качественное Обслуживание</p>
                  </div>
                  <div>
                    <img src="" alt="" />
                    <p>Опытные Специалисты</p>
                  </div>
                  <div>
                    <img src="" alt="" />
                    <p>Современное Оборудование</p>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <div className="tabs-wrapper">
                <div className="tabs-first">
                  <img src={img9} alt="service" />
                </div>
                <div className="tabs-second">
                  <div>
                    <h3>15 Лет Опытa в Автосервисе</h3>
                    <p>
                      Мы предлагаем быструю и качественную замену масла, чтобы
                      ваш двигатель работал плавно и эффективно.
                    </p>
                  </div>
                  <div>
                    <img src="" alt="" />
                    <p>Качественное Обслуживание</p>
                  </div>
                  <div>
                    <img src="" alt="" />
                    <p>Опытные Специалисты</p>
                  </div>
                  <div>
                    <img src="" alt="" />
                    <p>Современное Оборудование</p>
                  </div>
                </div>
              </div>
            </TabPanel>
          </Box>
        </div>
      </section>
    </>
  );
}
