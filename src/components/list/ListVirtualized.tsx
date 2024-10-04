import { CSSProperties, type FC } from "react";
import { ContactInterface } from "../../services/contacts/types";
import ListItem from "./ListItem";

import {
  AutoSizer,
  IndexRange,
  List as ListVirtualizedTow,
} from "react-virtualized";
import InfiniteLoader from "react-virtualized/dist/commonjs/InfiniteLoader";

interface ListProps {
  contacts: ContactInterface[];
  loading?: boolean;
  totalContacts: number;
  fetchMoreContacts: (params: IndexRange) => Promise<any>;
}

interface RowRenderProps {
  index: number;
  key: string;
  style: CSSProperties;
}

const ListVirtualized: FC<ListProps> = ({
  contacts = [],
  fetchMoreContacts,
  totalContacts,
}) => {
  const RowRenderer = ({ index, key, style }: RowRenderProps) => {
    const item = contacts[index];
    return <ListItem key={key} {...item} style={{ ...style }} />;
  };
  const NoRowsRenderer = () => (
    <div className="text-center py-4 text-gray-500">
      Sorry, no contacts found.
    </div>
  );

  const isItemLoaded = (index: number) => index < contacts.length;

  return (
    <div id="listParent" className="grow">
      <InfiniteLoader
        isRowLoaded={({ index }) => isItemLoaded(index)}
        rowCount={totalContacts}
        loadMoreRows={fetchMoreContacts}
        threshold={5}
      >
        {({ onRowsRendered, registerChild }) => (
          <AutoSizer>
            {({ height, width }) => (
              <ListVirtualizedTow
                height={height}
                noRowsRenderer={NoRowsRenderer}
                width={width}
                rowCount={contacts.length}
                rowHeight={92}
                rowRenderer={RowRenderer}
                onRowsRendered={onRowsRendered}
                ref={registerChild}
              >
                {RowRenderer}
              </ListVirtualizedTow>
            )}
          </AutoSizer>
        )}
      </InfiniteLoader>
    </div>
  );
};
export default ListVirtualized;
