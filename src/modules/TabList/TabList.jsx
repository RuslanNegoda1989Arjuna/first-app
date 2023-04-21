
import { useState } from "react";
import tabLost from "../../data/tabList.json";
import styles from './tabList.module.scss';

const TabList = () => {
    const [isActive, setIsActive] = useState(true);

    return (
        <div className="">
            
  <ul class="tabs__caption">
    <li class="active">Первая вкладка</li>
    <li>Вторая вкладка</li>
    <li>Третья вкладка</li>
    <li>Четвертая вкладка</li>
  </ul>

  <div class="tabs__content  active">
    <p>Локаята принимает во внимание онтологический закон исключённого третьего, открывая новые горизонты. Идеи гедонизма занимают центральное место в утилитаризме Милля и Бентама, однако гегельянство поразительно. Отношение к современности амбивалентно
      творит интеллект, изменяя привычную реальность.</p>
    <p>Апостериори, созерцание понимает под собой позитивизм, однако Зигварт считал критерием истинности необходимость и общезначимость, для которых нет никакой опоры в объективном мире. Закон исключённого третьего, следовательно, абстрактен. Катарсис рефлектирует
      трагический знак, открывая новые горизонты.</p>
  </div>

        </div>
)
}

export default TabList