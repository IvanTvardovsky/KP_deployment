import React from "react";

class Glossary extends React.Component {
   render() {
      return (
         <div>
            <h1 className="title" id="glossaryTitle">Словарь терминов</h1>

            <p id="afterGlossary" className="bigger">В этом разделе хранятся все основные юридические термины, которые
               объясняются простым
               языком.</p>

            <div className="glossaryBlock">
               <h2 className="term">Банкротство</h2>
               <p className="definition bigger">Это признанная судом неспособность гражданина погасить долги, в
                  результате
                  которой
                  все имущество гражданина продается.</p>
            </div>

            <div className="glossaryBlock">
               <h2 className="term">Брачный договор между супругами</h2>
               <p className="definition bigger">Это соглашение между супругами или будущими супругами о том, как будет
                  делиться добрачное или нажитое в браке имущество.</p>
            </div>

            <div className="glossaryBlock">
               <h2 className="term">Вид разрешенного использования земельного участка</h2>
               <p className="definition bigger">Это характеристика земельного участка, которая определяет, что на
                  участке
                  можно делать (например, строить дом), кадастровую стоимость, затраты на обслуживание.
               </p>
            </div>

            <div className="glossaryBlock">
               <h2 className="term">Выписка из ЕГРН</h2>
               <p className="definition bigger">Это документ, который содержит информацию об основных характеристиках
                  объекта,
                  сведения о лицах, у которых есть права на объект, о кадастровой стоимости, обременениях и многом
                  другом.</p>
            </div>

            <div className="glossaryBlock">
               <h2 className="term">Генеральная доверенность</h2>
               <p className="definition bigger">Это документ, который дает право доверенному лицу на самые разные
                  юридические действия, в том числе на покупку или отчуждение имущества и подпись документов.</p>
            </div>

            <div className="glossaryBlock">
               <h2 className="term">Генплан развития местности</h2>
               <p className="definition bigger">Это наглядная схема территории, которую можно посмотреть, чтобы избежать
                  соседства
                  с заводами и свалками.</p>
            </div>

            <div className="glossaryBlock">
               <h2 className="term">Доверенное лицо</h2>
               <p className="definition bigger">Это человек, которому доверяют дела и полномочия для выполнения
                  определенных действий от чужого имени.</p>
            </div>

            <div className="glossaryBlock">
               <h2 className="term">Доверенность</h2>
               <p className="definition bigger">Это документ, который дает право одному человеку действовать от имени
                  другого.</p>
            </div>

            <div className="glossaryBlock">
               <h2 className="term">Зарегистрированные права</h2>
               <p className="definition bigger">Это права, которые собственник имущества получает после их официальной
                  регистрации
                  в соответствующем органе.</p>
            </div>

            <div className="glossaryBlock">
               <h2 className="term">Зона особого назначения</h2>
               <p className="definition bigger">Это специальная зона, в которой земельные участки можно использовать по
                  назначению, но с оглядкой на правила застройки (всего 28 зон: охранная зона инженерных коммуникаций,
                  охранная зона линий электропередачи, водоохранная зона и др.).</p>
            </div>

            <div className="glossaryBlock">
               <h2 className="term">Кадастровый инженер</h2>
               <p className="definition bigger">Это специалист, который подготавливает документы для внесения информации
                  о
                  недвижимости в ЕГРН.</p>
            </div>

            <div className="glossaryBlock">
               <h2 className="term">Кадастровый учет</h2>
               <p className="definition bigger">Это процедура внесения сведений в ЕГРН о недвижимости, которой
                  присваивается
                  кадастровый номер.</p>
            </div>

            <div className="glossaryBlock">
               <h2 className="term">Межевание</h2>
               <p className="definition bigger">Это работа кадастрового инженера, которая позволяет определить границы
                  земельного
                  участка в межевом плане и внести данные в ЕГРН.</p>
            </div>

            <div className="glossaryBlock">
               <h2 className="term">Недееспособность</h2>
               <p className="definition bigger">Это признанная судом неспособность гражданина из-за психического
                  расстройства
                  понимать значение своих действий и руководствоваться ими даже при помощи других людей.</p>
            </div>

            <div className="glossaryBlock">
               <h2 className="term">Нотариальное согласие супруга</h2>
               <p className="definition bigger">Это документ, который необходим для продажи недвижимого имущества жены и
                  мужа и
                  удостоверен нотариусом.</p>
            </div>

            <div className="glossaryBlock">
               <h2 className="term">Обременения</h2>
               <p className="definition bigger">Это ограничение права гражданина распоряжаться земельным участком.</p>
            </div>

            <div className="glossaryBlock">
               <h2 className="term">Ограниченная дееспособность</h2>
               <p className="definition bigger">Это способность гражданина понимать значение своих действий и
                  руководствоваться
                  ими с помощью других людей. Суд признает человека ограниченно дееспособным вследствие пристрастия к
                  алкоголю, наркотическим средствам или азартным играм.</p>
            </div>

            <div className="glossaryBlock">
               <h2 className="term">Опекун</h2>
               <p className="definition bigger">Это человек, который заботится о другом человеке (обычно ребенке или
                  недееспособном взрослом), принимает решения от его имени и защищает его интересы.</p>
            </div>

            <div className="glossaryBlock">
               <h2 className="term">Переход права собственности</h2>
               <p className="definition bigger">Это процесс передачи права собственности на недвижимость от одного лица
                  (продавца)
                  другому лицу (покупателю). Переход права может осуществляться путем продажи, дарения, наследования или
                  других законных способов.</p>
            </div>

            <div className="glossaryBlock">
               <h2 className="term">Погашение обременений</h2>
               <p className="definition bigger">Это процесс полного или частичного устранения ограничений или
                  обязательств,
                  связанных с недвижимостью или имуществом.</p>
            </div>

            <div className="glossaryBlock">
               <h2 className="term">Право собственности</h2>
               <p className="definition bigger">Это право гражданина владеть, пользоваться и распоряжаться
                  имуществом.</p>
            </div>

            <div className="glossaryBlock">
               <h2 className="term">Публичная кадастровая карта Росреестра</h2>
               <p className="definition bigger">Это онлайн-сервис, который по кадастровому номеру и адресу предоставляет
                  информацию об основных характеристиках участка.</p>
            </div>

            <div className="glossaryBlock">
               <h2 className="term">Реестр судебных приставов</h2>
               <p className="definition bigger">Это система учета должников, которая расположена на официальном сайте
                  ФССП
                  России.</p>
            </div>

            <div className="glossaryBlock">
               <h2 className="term">Справка из наркологического диспансера</h2>
               <p className="definition bigger">Это документ, который подтверждает факт того, что обратившийся не стоит
                  на
                  учете с алкогольной или наркотической зависимостью, и гарантирует невозможность признать договор
                  недействительным.</p>
            </div>

            <div className="glossaryBlock">
               <h2 className="term">Справка из психоневрологического диспансера</h2>
               <p className="definition bigger">Это документ, который подтверждает факт того, что лицо не состоит на
                  учете
                  в психоневрологическом диспансере и не имеет психических заболеваний, а также гарантирует
                  невозможность
                  признать договор недействительным.</p>
            </div>

            <div className="glossaryBlock">
               <h2 className="term">Удостоверение сделки нотариусом</h2>
               <p className="definition bigger">Это проверка законности сделки нотариусом или лицом, исполняющим его
                  обязанности.
                  Нотариус должен убедиться, что у сторон есть право подписать договор и что этот договор не нарушает их
                  права.</p>
            </div>

            <div className="glossaryBlock">
               <h2 className="term">Целевое использование</h2>
               <p className="definition bigger">Это использование земельного участка в соответствии с его установленной
                  категорией
                  (всего 7 категорий: земли сельхоз назначения, земли населенных пунктов, земли особо охраняемых
                  территорий
                  и объектов и др.).</p>
            </div>

            <div className="glossaryBlock">
               <h2 className="term">Экологическая ситуация</h2>
               <p className="definition bigger">Это состояние окружающей среды земельного участка, включая наличие
                  полезных
                  ископаемых, загрязняющих веществ в атмосферном воздухе, месторождений пресных подземных вод и др.</p>
            </div>

            <div className="glossaryBlock">
               <h2 className="term">Экстремизм</h2>
               <p className="definition bigger">Это криминальное явление, направленное против основ конституционного
                  строя
                  и
                  безопасности государства.</p>
            </div>

            <div className="glossaryBlock">
               <h2 className="term">Юридическая история земельного участка</h2>
               <p className="definition bigger">Это хронологические сведения о количестве предыдущих сделок с земельным
                  участком и
                  временном интервале между ними.</p>
            </div>
         </div>
      );
   }
}

export default Glossary;