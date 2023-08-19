import MenuCategory from './MenuCategory';
import ConceptMenuItem from './ConceptMenuItem';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faUserShield } from '@fortawesome/free-solid-svg-icons'
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons'
import { faSquareVirus } from '@fortawesome/free-solid-svg-icons'
import { faThermometer } from '@fortawesome/free-solid-svg-icons'
import { faClipboard } from '@fortawesome/free-solid-svg-icons'
import { faBrain } from '@fortawesome/free-solid-svg-icons'

export function SidebarMenu() {
    return (
        <div className={'overflow-auto'}>
            <MenuCategory title={"Comptes"}>
                <ConceptMenuItem conceptName={'admin'} icon={faUserShield} label={'Administrateurs'} />
                <ConceptMenuItem conceptName={'patient'} icon={faUser} label={'Patients'} />
                <ConceptMenuItem conceptName={'doctor'} icon={faUserDoctor} label={'Médecins'} />
            </MenuCategory>

            <MenuCategory title={"Santé"} >
                <ConceptMenuItem conceptName={'symptom'} icon={faThermometer} label={'Symptomes'} />
                <ConceptMenuItem conceptName={'disease'} icon={faSquareVirus} label={'Maladies'} />
            </MenuCategory>

            <MenuCategory title={"Exécution"}>
                <ConceptMenuItem conceptName={'session'} icon={faClipboard} label={'Sessions'} />
                <ConceptMenuItem conceptName={'nlp'} icon={faBrain} label={'Rapports NLP'} />
            </MenuCategory>
        </div>
    );
}

export default SidebarMenu;