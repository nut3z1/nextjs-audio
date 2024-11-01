import Image, { ImageProps } from 'next/image';
import logo from "../../../../public/logo.jpg";

interface AvatarProps extends Omit<ImageProps, 'alt' | 'src'> {
	alt?: string;
	className?: string;
	src?: string;
}

export const Avatar = ({ alt, className = '', src, ...imageProps }: AvatarProps) => {
	return (
		<div
			className={``}
			data-testid='favorite-avatar'
		>
			<Image
				alt={alt ?? ''}
				fill
				className='rounded-full object-cover'
				src={src && src !== '' ? src : logo.src}
				{...imageProps}
			/>
		</div>
	);
};
