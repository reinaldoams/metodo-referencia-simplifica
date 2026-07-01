import { SITE_AUTHOR, SITE_AUTHOR_PORTFOLIO_URL } from '../data/site';
import { AUTHOR_LINK_CLASS } from '../lib/author-link';

interface Props {
	template: string;
}

export default function AuthorMention(props: Props) {
	const [beforeAuthor, afterAuthor] = props.template.split('{author}');

	return (
		<>
			{beforeAuthor}
			<a
				href={SITE_AUTHOR_PORTFOLIO_URL}
				target="_blank"
				rel="noopener noreferrer"
				class={AUTHOR_LINK_CLASS}
			>
				{SITE_AUTHOR}
			</a>
			{afterAuthor}
		</>
	);
}
