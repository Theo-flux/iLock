import { Wrapper } from '../../shared'
import NavCommon from '../common/NavCommon'
import { NotificationSection, NotificationPod, Figure, Image, Column, ColumnTitle, ColumnText } from './notification.css'
import notImg from '../../assets/images/notification_img.svg'

function Notification() {
  return (
    <Wrapper>
      <NavCommon text={'Notifications'}/>
      <NotificationSection>
        <NotificationPod>
          <Figure>
            <Image src={notImg} alt="admin_intruder"/>
          </Figure>

          <Column>
            <ColumnTitle>Admin</ColumnTitle>
            <ColumnText>Sun, Mar 26 17:09pm</ColumnText>
          </Column>
        </NotificationPod>

        <NotificationPod>
          <Figure>
            <Image src={notImg} alt="admin_intruder"/>
          </Figure>

          <Column>
            <ColumnTitle>Admin</ColumnTitle>
            <ColumnText>Sun, Mar 26 17:09pm</ColumnText>
          </Column>
        </NotificationPod>

        <NotificationPod>
          <Figure>
            <Image src={notImg} alt="admin_intruder"/>
          </Figure>

          <Column>
            <ColumnTitle>Admin</ColumnTitle>
            <ColumnText>Sun, Mar 26 17:09pm</ColumnText>
          </Column>
        </NotificationPod>
      </NotificationSection>
    </Wrapper>
  )
}

export default Notification