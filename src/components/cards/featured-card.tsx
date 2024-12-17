import Heading from '@components/ui/heading';
import cn from 'classnames';
// 
import Text from '@components/ui/text';

interface ItemProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

interface Props {
  // lang: string;
  className?: string;
  item: ItemProps;
  layout?: string;
}

const FeaturedCard: React.FC<Props> = ({ item, className, layout }) => {
  // const { t } = useTranslation(lang, 'common');
  const { icon, title, description } = item;
  return (
    <div
      className={cn(
        'group  px-5 xl:px-5 2xl:px-6 flex items-center justify-center  border-black/10 ltr:border-r rtl:border-l',
        className
      )}
    >
      <div className="flex flex-shrink-0 items-center justify-center">
        {icon}
      </div>
      {layout == "home7" ? (
        <div className="ps-4">
          <Heading variant="base" className="sm:text-sm hover:text-skin-primary">
            {(title)}
          </Heading>
          <Text className={"text-13px lg:leading-[22px]"}>{(description)}</Text>
        </div>
      ) : (
        <div className="ps-4">
          <Heading variant="base" className="-mt-0.5">
            {(title)}
          </Heading>
          <Text>{(description)}</Text>
        </div>
      )}


    </div>
  );
};

export default FeaturedCard;
