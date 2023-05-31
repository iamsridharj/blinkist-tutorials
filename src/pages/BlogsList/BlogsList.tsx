import booksMock from "../../mocks/books.data.json";
import {
  AB_VARIATION_BOOK_DESCRIPTION,
  AB_VARIATION_COVER_PIC,
} from "../../constants";
import ABTest from "../../components/ABTest";
import {
  MainHeader,
  SmallTextBold,
  BodyText,
} from "../../components/Typography/Typography.styles";
import {
  BookCoverImage,
  BookListWrapper,
  BookDetailsContainer,
} from "./BlogsList.styles";

const BlogsList = () => {
  return (
    <>
      {(booksMock.books || []).map((book) => (
        <BookListWrapper key={book.id}>
          <BookDetailsContainer>
            <MainHeader>{book.title}</MainHeader>
            <SmallTextBold>{book.author}</SmallTextBold>
            <ABTest
              test={<SmallTextBold>Rating: {book.rating}</SmallTextBold>}
              control={<></>}
            />
            <ABTest
              test={<BodyText>{book.description}</BodyText>}
              control={<></>}
              featureVariationKey={AB_VARIATION_BOOK_DESCRIPTION}
            />
          </BookDetailsContainer>
          <ABTest
            test={<BookCoverImage src={book.cover_bg} />}
            control={<></>}
            featureVariationKey={AB_VARIATION_COVER_PIC}
          />
        </BookListWrapper>
      ))}
    </>
  );
};

export default BlogsList;
